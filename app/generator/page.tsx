"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Shuffle, Copy, Check, Trash2, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface GeneratedString {
  id: string
  value: string
  timestamp: Date
  length: number
  characterSets: string[]
}

interface CharacterSet {
  id: string
  label: string
  characters: string
  enabled: boolean
}

const DEFAULT_CHARACTER_SETS: CharacterSet[] = [
  { id: "uppercase", label: "Uppercase (A-Z)", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", enabled: true },
  { id: "lowercase", label: "Lowercase (a-z)", characters: "abcdefghijklmnopqrstuvwxyz", enabled: true },
  { id: "numbers", label: "Numbers (0-9)", characters: "0123456789", enabled: true },
  { id: "symbols", label: "Symbols (!@#$...)", characters: "!@#$%^&*()_+-=[]{}|;:,.<>?", enabled: false },
]

export default function GeneratorPage() {
  const [length, setLength] = useState([12])
  const [characterSets, setCharacterSets] = useState<CharacterSet[]>(DEFAULT_CHARACTER_SETS)
  const [currentString, setCurrentString] = useState("")
  const [history, setHistory] = useState<GeneratedString[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("string-generator-history")
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory).map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp),
        }))
        setHistory(parsed)
      } catch (error) {
        console.error("Failed to load history:", error)
      }
    }
  }, [])

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("string-generator-history", JSON.stringify(history))
    }
  }, [history])

  const generateRandomString = useCallback((targetLength: number, availableChars: string): string => {
    let result = ""
    for (let i = 0; i < targetLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length)
      result += availableChars[randomIndex]
    }
    return result
  }, [])

  const getAvailableCharacters = useCallback((): string => {
    return characterSets
      .filter((set) => set.enabled)
      .map((set) => set.characters)
      .join("")
  }, [characterSets])

  const getEnabledSetLabels = useCallback((): string[] => {
    return characterSets.filter((set) => set.enabled).map((set) => set.label)
  }, [characterSets])

  const handleGenerate = useCallback(async () => {
    const availableChars = getAvailableCharacters()

    if (availableChars.length === 0) {
      toast({
        title: "No character sets selected",
        description: "Please select at least one character set to generate strings",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate generation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    const newString = generateRandomString(length[0], availableChars)
    setCurrentString(newString)

    // Add to history
    const newHistoryItem: GeneratedString = {
      id: Date.now().toString(),
      value: newString,
      timestamp: new Date(),
      length: length[0],
      characterSets: getEnabledSetLabels(),
    }

    setHistory((prev) => [newHistoryItem, ...prev.slice(0, 19)]) // Keep only last 20 items

    setIsGenerating(false)

    toast({
      title: "String generated!",
      description: `Generated ${length[0]}-character string`,
    })
  }, [length, generateRandomString, getAvailableCharacters, getEnabledSetLabels, toast])

  const handleCopy = useCallback(
    async (text: string, id?: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopiedId(id || "current")
        toast({
          title: "Copied!",
          description: "String copied to clipboard",
        })
        setTimeout(() => setCopiedId(null), 2000)
      } catch (error) {
        toast({
          title: "Copy failed",
          description: "Could not copy to clipboard",
          variant: "destructive",
        })
      }
    },
    [toast],
  )

  const handleCharacterSetToggle = useCallback((setId: string, enabled: boolean) => {
    setCharacterSets((prev) => prev.map((set) => (set.id === setId ? { ...set, enabled } : set)))
  }, [])

  const handleClearHistory = useCallback(() => {
    setHistory([])
    localStorage.removeItem("string-generator-history")
    toast({
      title: "History cleared",
      description: "All generated strings have been removed",
    })
  }, [toast])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || (e.key === " " && e.ctrlKey)) {
        e.preventDefault()
        handleGenerate()
      }
    },
    [handleGenerate],
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Shuffle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Random String Generator</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Generate secure random strings with customizable length and character sets
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Configuration Panel */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                  <CardDescription>Customize your random string generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Length Slider */}
                  <div>
                    <Label className="text-sm font-medium">String Length: {length[0]}</Label>
                    <div className="mt-2">
                      <Slider value={length} onValueChange={setLength} max={128} min={1} step={1} className="w-full" />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1</span>
                        <span>128</span>
                      </div>
                    </div>
                  </div>

                  {/* Character Sets */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Character Sets</Label>
                    <div className="space-y-3">
                      {characterSets.map((set) => (
                        <div key={set.id} className="flex items-start space-x-3">
                          <Checkbox
                            id={set.id}
                            checked={set.enabled}
                            onCheckedChange={(checked) => handleCharacterSetToggle(set.id, checked as boolean)}
                          />
                          <div className="flex-1">
                            <Label htmlFor={set.id} className="text-sm font-medium cursor-pointer">
                              {set.label}
                            </Label>
                            <div className="text-xs text-gray-500 mt-1 font-mono break-all">
                              {set.characters.slice(0, 20)}
                              {set.characters.length > 20 && "..."}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || characterSets.every((set) => !set.enabled)}
                    className="w-full"
                    size="lg"
                    onKeyDown={handleKeyPress}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Shuffle className="w-4 h-4 mr-2" />
                        Generate String
                      </>
                    )}
                  </Button>

                  <div className="text-xs text-gray-500 text-center">Press Enter or Ctrl+Space to generate quickly</div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Generated String */}
              <Card>
                <CardHeader>
                  <CardTitle>Generated String</CardTitle>
                  <CardDescription>Your most recently generated random string</CardDescription>
                </CardHeader>
                <CardContent>
                  {currentString ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
                          <div className="font-mono text-lg break-all select-all">{currentString}</div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCopy(currentString)}
                          className="absolute top-2 right-2 bg-transparent"
                        >
                          {copiedId === "current" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Length: {currentString.length}</Badge>
                        {getEnabledSetLabels().map((label) => (
                          <Badge key={label} variant="outline">
                            {label.split(" ")[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <Shuffle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No string generated yet</p>
                      <p className="text-sm">Click "Generate String" to create your first random string</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* History */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Generation History</CardTitle>
                    <CardDescription>Your recently generated strings (last 20)</CardDescription>
                  </div>
                  {history.length > 0 && (
                    <Button variant="outline" size="sm" onClick={handleClearHistory}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {history.length > 0 ? (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {history.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-mono text-sm break-all select-all">{item.value}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {item.length} chars
                              </Badge>
                              <span className="text-xs text-gray-500">{item.timestamp.toLocaleTimeString()}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(item.value, item.id)}
                            className="ml-2 flex-shrink-0"
                          >
                            {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 opacity-50" />
                      </div>
                      <p>No generation history yet</p>
                      <p className="text-sm">Generated strings will appear here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
