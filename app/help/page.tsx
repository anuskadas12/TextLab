import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Languages, Shuffle, Key, Shield } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Help & FAQ</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions and learn how to get the most out of TextLab.
            </p>
          </div>

          <div className="space-y-8">
            {/* Translator FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Text Translator
                </CardTitle>
                <CardDescription>Common questions about our translation service</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="translator-1">
                    <AccordionTrigger>How do I set up the RapidAPI key for real translations?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>
                          Sign up for a free account at{" "}
                          <a
                            href="https://rapidapi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            RapidAPI.com
                          </a>
                        </li>
                        <li>Subscribe to the Google Translate API (free tier available)</li>
                        <li>Copy your API key from the RapidAPI dashboard</li>
                        <li>Add it as NEXT_PUBLIC_RAPIDAPI_KEY in your environment variables</li>
                        <li>Restart your application to apply the changes</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="translator-2">
                    <AccordionTrigger>What languages are supported?</AccordionTrigger>
                    <AccordionContent>
                      We support 15+ languages including Spanish, French, German, Italian, Portuguese, Russian,
                      Japanese, Korean, Chinese, Arabic, Hindi, Turkish, Polish, Dutch, and Swedish. More languages can
                      be added upon request.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="translator-3">
                    <AccordionTrigger>Why am I seeing demo translations?</AccordionTrigger>
                    <AccordionContent>
                      Demo translations appear when the RapidAPI key is not configured. The app provides mock
                      translations to demonstrate functionality. Configure your API key for real translations powered by
                      Google Translate.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="translator-4">
                    <AccordionTrigger>Is there a character limit for translations?</AccordionTrigger>
                    <AccordionContent>
                      Yes, there&apos;s a 1000 character limit per translation to ensure optimal performance and manage
                      API costs. For longer texts, consider breaking them into smaller chunks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* String Generator FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shuffle className="w-5 h-5" />
                  Random String Generator
                </CardTitle>
                <CardDescription>Everything about generating secure random strings</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="generator-1">
                    <AccordionTrigger>How secure are the generated strings?</AccordionTrigger>
                    <AccordionContent>
                      Our generator uses JavaScript&apos;s Math.random() function, which is suitable for most
                      applications but not cryptographically secure. For high-security applications, consider using a
                      dedicated cryptographic library.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="generator-2">
                    <AccordionTrigger>What character sets can I use?</AccordionTrigger>
                    <AccordionContent>
                      You can choose from uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and symbols.
                      Mix and match any combination to create strings that meet your requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="generator-3">
                    <AccordionTrigger>How long can generated strings be?</AccordionTrigger>
                    <AccordionContent>
                      You can generate strings from 1 to 128 characters long. Use the slider to adjust the length, or
                      type a specific value for precise control.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="generator-4">
                    <AccordionTrigger>Is my generation history saved?</AccordionTrigger>
                    <AccordionContent>
                      Yes, your last 20 generated strings are saved locally in your browser&apos;s storage. This data
                      never leaves your device and can be cleared at any time using the &quot;Clear&quot; button.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* General FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>Your privacy and data security questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="privacy-1">
                    <AccordionTrigger>Do you store my translations or generated strings?</AccordionTrigger>
                    <AccordionContent>
                      No, we don&apos;t store any of your translations or generated strings on our servers. All
                      processing happens in your browser, and your data stays private and secure.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy-2">
                    <AccordionTrigger>Is the app safe to use for sensitive information?</AccordionTrigger>
                    <AccordionContent>
                      While we prioritize security, we recommend not using the translator for highly sensitive
                      information. For maximum security, consider running the app locally or using dedicated enterprise
                      translation services.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy-3">
                    <AccordionTrigger>What data do you collect?</AccordionTrigger>
                    <AccordionContent>
                      We only collect basic usage analytics to improve the app. No personal information, translations,
                      or generated strings are collected or stored. Your privacy is our priority.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Keyboard Shortcuts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  Keyboard Shortcuts
                </CardTitle>
                <CardDescription>Speed up your workflow with these shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Translator</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Ctrl + Enter</kbd> -
                        Translate text
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">String Generator</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Enter</kbd> - Generate
                        string
                      </li>
                      <li>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Ctrl + Space</kbd> -
                        Generate string
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
