import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About TextLab</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating powerful, user-friendly tools that make language translation and secure
              string generation accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To break down language barriers and provide secure, reliable tools for developers and users worldwide.
                  We believe technology should be accessible, fast, and trustworthy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Built by developers, for developers. Our team combines expertise in AI, linguistics, and security to
                  deliver tools that meet real-world needs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Performance First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with modern React hooks and optimized for speed. Our tools are designed to be lightning-fast and
                  responsive across all devices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Your data stays private with client-side processing and secure random generation. We never store your
                  translations or generated strings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
