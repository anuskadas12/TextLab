"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2, Languages, Copy, Check, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface TranslationResponse {
  translatedText: string
  detectedLanguage?: string
}

const LANGUAGES = [
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh", name: "Chinese (Simplified)" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
  { code: "tr", name: "Turkish" },
  { code: "pl", name: "Polish" },
  { code: "nl", name: "Dutch" },
  { code: "sv", name: "Swedish" },
]

export default function TranslatorPage() {
  const [inputText, setInputText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (error) {
      setError("")
    }
  }, [inputText, selectedLanguage])

  const translateText = useCallback(async (text: string, targetLanguage: string): Promise<TranslationResponse> => {
    const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY

    if (!apiKey) {
      console.log("[v0] Using mock translation - API key not configured")

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockTranslationService = (inputText: string, targetLang: string): string => {
        // Common translations for demonstration
        const commonTranslations: Record<string, Record<string, string>> = {
          es: {
            hello: "hola",
            goodbye: "adiós",
            "thank you": "gracias",
            please: "por favor",
            yes: "sí",
            no: "no",
            today: "hoy",
            tomorrow: "mañana",
            yesterday: "ayer",
            monday: "lunes",
            tuesday: "martes",
            wednesday: "miércoles",
            thursday: "jueves",
            friday: "viernes",
            saturday: "sábado",
            sunday: "domingo",
            january: "enero",
            february: "febrero",
            march: "marzo",
            april: "abril",
            may: "mayo",
            june: "junio",
            july: "julio",
            august: "agosto",
            september: "septiembre",
            october: "octubre",
            november: "noviembre",
            december: "diciembre",
            "good morning": "buenos días",
            "good afternoon": "buenas tardes",
            "good evening": "buenas noches",
            "how are you": "¿cómo estás?",
            "what time is it": "¿qué hora es?",
            "i love you": "te amo",
            "happy birthday": "feliz cumpleaños",
          },
          fr: {
            hello: "bonjour",
            goodbye: "au revoir",
            "thank you": "merci",
            please: "s'il vous plaît",
            yes: "oui",
            no: "non",
            today: "aujourd'hui",
            tomorrow: "demain",
            yesterday: "hier",
            monday: "lundi",
            tuesday: "mardi",
            wednesday: "mercredi",
            thursday: "jeudi",
            friday: "vendredi",
            saturday: "samedi",
            sunday: "dimanche",
            january: "janvier",
            february: "février",
            march: "mars",
            april: "avril",
            may: "mai",
            june: "juin",
            july: "juillet",
            august: "août",
            september: "septembre",
            october: "octobre",
            november: "novembre",
            december: "décembre",
            "good morning": "bonjour",
            "good afternoon": "bon après-midi",
            "good evening": "bonsoir",
            "how are you": "comment allez-vous?",
            "what time is it": "quelle heure est-il?",
            "i love you": "je t'aime",
            "happy birthday": "joyeux anniversaire",
          },
          de: {
            hello: "hallo",
            goodbye: "auf wiedersehen",
            "thank you": "danke",
            please: "bitte",
            yes: "ja",
            no: "nein",
            today: "heute",
            tomorrow: "morgen",
            yesterday: "gestern",
            monday: "montag",
            tuesday: "dienstag",
            wednesday: "mittwoch",
            thursday: "donnerstag",
            friday: "freitag",
            saturday: "samstag",
            sunday: "sonntag",
            january: "januar",
            february: "februar",
            march: "märz",
            april: "april",
            may: "mai",
            june: "juni",
            july: "juli",
            august: "august",
            september: "september",
            october: "oktober",
            november: "novembre",
            december: "dezember",
            "good morning": "guten morgen",
            "good afternoon": "guten tag",
            "good evening": "guten abend",
            "how are you": "wie geht es dir?",
            "what time is it": "wie spät ist es?",
            "i love you": "ich liebe dich",
            "happy birthday": "alles gute zum geburtstag",
          },
          it: {
            hello: "ciao",
            goodbye: "arrivederci",
            "thank you": "grazie",
            please: "per favore",
            yes: "sì",
            no: "no",
            today: "oggi",
            tomorrow: "domani",
            yesterday: "ieri",
            monday: "lunedì",
            tuesday: "martedì",
            wednesday: "mercoledì",
            thursday: "giovedì",
            friday: "venerdì",
            saturday: "sabato",
            sunday: "domenica",
            january: "gennaio",
            february: "febbraio",
            march: "marzo",
            april: "aprile",
            may: "maggio",
            june: "giugno",
            july: "luglio",
            august: "agosto",
            september: "settembre",
            october: "ottobre",
            november: "novembre",
            december: "dicembre",
            "good morning": "buongiorno",
            "good afternoon": "buon pomeriggio",
            "good evening": "buonasera",
            "how are you": "come stai?",
            "what time is it": "che ore sono?",
            "i love you": "ti amo",
            "happy birthday": "buon compleanno",
          },
          pt: {
            hello: "olá",
            goodbye: "tchau",
            "thank you": "obrigado",
            please: "por favor",
            yes: "sim",
            no: "não",
            today: "hoje",
            tomorrow: "amanhã",
            yesterday: "ontem",
            monday: "segunda-feira",
            tuesday: "terça-feira",
            wednesday: "quarta-feira",
            thursday: "quinta-feira",
            friday: "sexta-feira",
            saturday: "sábado",
            sunday: "domingo",
            january: "janeiro",
            february: "fevereiro",
            march: "março",
            april: "abril",
            may: "maio",
            june: "junho",
            july: "julho",
            august: "agosto",
            september: "setembro",
            october: "outubro",
            november: "novembro",
            december: "dezembro",
            "good morning": "bom dia",
            "good afternoon": "boa tarde",
            "good evening": "boa noite",
            "how are you": "como você está?",
            "what time is it": "que horas são?",
            "i love you": "eu te amo",
            "happy birthday": "feliz aniversário",
          },
        }

        const lowerText = inputText.toLowerCase().trim()
        const translations = commonTranslations[targetLang] || {}

        // Check for exact matches first
        if (translations[lowerText]) {
          return translations[lowerText]
        }

        // Check for partial matches and replace words
        let translatedText = inputText
        for (const [english, translated] of Object.entries(translations)) {
          const regex = new RegExp(`\\b${english}\\b`, "gi")
          translatedText = translatedText.replace(regex, translated)
        }

        // Handle date patterns (MM/DD/YYYY, DD/MM/YYYY, etc.)
        const datePatterns = [
          /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g, // MM/DD/YYYY or DD/MM/YYYY
          /\b(\d{1,2})-(\d{1,2})-(\d{4})\b/g, // MM-DD-YYYY or DD-MM-YYYY
          /\b(\d{4})\/(\d{1,2})\/(\d{1,2})\b/g, // YYYY/MM/DD
          /\b(\d{4})-(\d{1,2})-(\d{1,2})\b/g, // YYYY-MM-DD
        ]

        datePatterns.forEach((pattern) => {
          translatedText = translatedText.replace(pattern, (match) => {
            // Keep the date format but add a note that it's preserved
            return match
          })
        })

        // Handle numbers - keep them as is
        const numberPattern = /\b\d+\b/g
        const numbers = inputText.match(numberPattern) || []

        // If no translation was made, provide a contextual mock translation
        if (translatedText === inputText) {
          const languageNames: Record<string, string> = {
            es: "español",
            fr: "français",
            de: "deutsch",
            it: "italiano",
            pt: "português",
            ru: "русский",
            ja: "日本語",
            ko: "한국어",
            zh: "中文",
            ar: "العربية",
            hi: "हिन्दी",
            tr: "türkçe",
            pl: "polski",
            nl: "nederlands",
            sv: "svenska",
          }

          return `[Demo: "${inputText}" traducido al ${languageNames[targetLang] || targetLang}]`
        }

        return translatedText
      }

      const translatedText = mockTranslationService(text, targetLanguage)

      return {
        translatedText,
        detectedLanguage: "en",
      }
    }

    try {
      console.log("[v0] Starting translation request", { text: text.substring(0, 50), targetLanguage })

      const response = await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        body: new URLSearchParams({
          q: text,
          target: targetLanguage,
          source: "en",
        }),
      })

      console.log("[v0] API response status:", response.status)

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("API access denied. Please check your RapidAPI key and subscription status.")
        } else if (response.status === 429) {
          throw new Error("Translation quota exceeded. Please try again later.")
        } else if (response.status === 401) {
          throw new Error("Invalid API key. Please check your NEXT_PUBLIC_RAPIDAPI_KEY.")
        } else {
          throw new Error(`Translation service error (${response.status}). Please try again.`)
        }
      }

      const data = await response.json()
      console.log("[v0] API response data:", data)

      let translatedText = ""
      if (data.data && data.data.translations && data.data.translations.length > 0) {
        translatedText = data.data.translations[0].translatedText
      } else if (data.translatedText) {
        translatedText = data.translatedText
      } else {
        console.log("[v0] Unexpected response format:", data)
        throw new Error("Unexpected response format from translation API")
      }

      console.log("[v0] Translation successful:", translatedText.substring(0, 50))
      return { translatedText }
    } catch (error) {
      console.error("[v0] Translation error:", error)

      if (error instanceof Error) {
        if (error.message.includes("API key") || error.message.includes("403") || error.message.includes("401")) {
          throw error
        } else if (error.message.includes("fetch") || error.name === "TypeError") {
          throw new Error("Network error. Please check your internet connection and try again.")
        } else {
          throw error
        }
      } else {
        throw new Error("Translation failed. Please try again.")
      }
    }
  }, [])

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to translate")
      return
    }

    if (!selectedLanguage) {
      setError("Please select a target language")
      return
    }

    setIsLoading(true)
    setError("")
    setTranslatedText("")

    try {
      const result = await translateText(inputText.trim(), selectedLanguage)
      setTranslatedText(result.translatedText)

      const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY
      toast({
        title: apiKey ? "Translation completed!" : "Mock translation completed!",
        description: apiKey
          ? `Text translated to ${LANGUAGES.find((l) => l.code === selectedLanguage)?.name}`
          : "Using demo translation. Configure RapidAPI key for real translations.",
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Translation failed"
      setError(errorMessage)
      toast({
        title: "Translation failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [inputText, selectedLanguage, translateText, toast])

  const handleCopy = useCallback(async () => {
    if (!translatedText) return

    try {
      await navigator.clipboard.writeText(translatedText)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Translation copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      })
    }
  }, [translatedText, toast])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && e.ctrlKey) {
        handleTranslate()
      }
    },
    [handleTranslate],
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Text Translator</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Translate English text to your favorite language using AI-powered translation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">
                    EN
                  </span>
                  English Text
                </CardTitle>
                <CardDescription>Enter the text you want to translate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="input-text">Text to translate</Label>
                  <Textarea
                    id="input-text"
                    placeholder="Type your English text here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="min-h-32 resize-none"
                    maxLength={1000}
                  />
                  <div className="text-xs text-gray-500 mt-1">{inputText.length}/1000 characters</div>
                </div>

                <div>
                  <Label htmlFor="language-select">Target Language</Label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger id="language-select">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim() || !selectedLanguage}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Translating...
                    </>
                  ) : (
                    <>
                      <Languages className="w-4 h-4 mr-2" />
                      Translate Text
                    </>
                  )}
                </Button>

                {error && (
                  <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Translation Error</div>
                        <div className="mt-1">{error}</div>
                        {error.includes("API key") && (
                          <div className="mt-2 text-xs">
                            <strong>Setup Instructions:</strong>
                            <ol className="list-decimal list-inside mt-1 space-y-1">
                              <li>
                                Sign up at{" "}
                                <a
                                  href="https://rapidapi.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                >
                                  RapidAPI.com
                                </a>
                              </li>
                              <li>Subscribe to the Google Translate API</li>
                              <li>Add your API key as NEXT_PUBLIC_RAPIDAPI_KEY in environment variables</li>
                            </ol>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500">Tip: Press Ctrl+Enter to translate quickly</div>
              </CardContent>
            </Card>

            {/* Output Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                    {selectedLanguage ? selectedLanguage.toUpperCase() : "??"}
                  </span>
                  Translation
                  {selectedLanguage && (
                    <span className="text-sm font-normal text-gray-500">
                      ({LANGUAGES.find((l) => l.code === selectedLanguage)?.name})
                    </span>
                  )}
                </CardTitle>
                <CardDescription>Your translated text will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Textarea
                    value={translatedText}
                    readOnly
                    placeholder="Translation will appear here..."
                    className="min-h-32 resize-none bg-gray-50 dark:bg-gray-800"
                  />

                  {translatedText && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="absolute top-2 right-2 bg-transparent"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  )}
                </div>

                {translatedText && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <div className="text-sm text-green-700 dark:text-green-300">
                      ✓ Translation completed successfully
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  {process.env.NEXT_PUBLIC_RAPIDAPI_KEY ? (
                    <>
                      <strong>Powered by Google Translate via RapidAPI:</strong> This translator uses Google's
                      translation service through RapidAPI with your configured API key.
                    </>
                  ) : (
                    <>
                      <strong>Demo Mode:</strong> Currently using mock translations for demonstration. Configure your
                      NEXT_PUBLIC_RAPIDAPI_KEY environment variable and subscribe to the Google Translate API on
                      RapidAPI for real translations.
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
