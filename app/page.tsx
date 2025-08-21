import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Languages, Shuffle, Zap, Shield, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">TextLab</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive solution for text translation and secure random string generation. Built with modern
            React hooks and beautiful, responsive design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Languages className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl mb-2">Text Translator</CardTitle>
              <CardDescription className="text-base">
                Translate text from English to your favorite language using advanced AI-powered translation services
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span>15+ Languages supported</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Real-time translation</span>
                </div>
              </div>
              <Link href="/translator">
                <Button size="lg" className="w-full">
                  Start Translating
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <Shuffle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl mb-2">Random String Generator</CardTitle>
              <CardDescription className="text-base">
                Generate secure random strings with customizable length and character sets for passwords and tokens
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Cryptographically secure</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Generation history</span>
                </div>
              </div>
              <Link href="/generator">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  Generate Strings
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Why Choose TextLab?</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast & Efficient</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lightning-fast processing with modern React hooks and optimized performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your data stays private with client-side processing and secure random generation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User-Friendly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intuitive interface with keyboard shortcuts and responsive design for all devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
