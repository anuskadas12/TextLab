import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we handle your data when you use TextLab.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">What We Don't Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Your translated text or generated strings</li>
                  <li>Personal information or account details</li>
                  <li>IP addresses or location data</li>
                  <li>Browser fingerprints or tracking cookies</li>
                </ul>

                <h3 className="font-semibold mt-6">What We May Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Basic usage analytics (page views, feature usage)</li>
                  <li>Error logs for debugging purposes</li>
                  <li>Performance metrics to improve the app</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">Client-Side Processing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All text translation and string generation happens in your browser. Your data never leaves your device
                  unless you explicitly use external translation services.
                </p>

                <h3 className="font-semibold mt-6">External Services</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When using real translation features with RapidAPI, your text is sent to Google Translate's servers.
                  Please review Google's privacy policy for their data handling practices.
                </p>

                <h3 className="font-semibold mt-6">Local Storage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Generated string history is stored locally in your browser and can be cleared at any time. This data
                  never leaves your device.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Right to Privacy:</strong> Use the app without creating accounts or providing personal
                    information
                  </li>
                  <li>
                    <strong>Right to Control:</strong> Clear your local data at any time using browser settings
                  </li>
                  <li>
                    <strong>Right to Know:</strong> Contact us for information about any data we might collect
                  </li>
                  <li>
                    <strong>Right to Delete:</strong> Request deletion of any data we may have collected
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">RapidAPI & Google Translate</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When you configure and use real translation features, your text is processed by Google Translate via
                  RapidAPI. These services have their own privacy policies:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>
                    <a
                      href="https://rapidapi.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      RapidAPI Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Measures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>All connections use HTTPS encryption</li>
                  <li>No server-side storage of user content</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Open-source code available for review</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@textlab.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      privacy@textlab.com
                    </a>
                  </li>
                  <li>
                    <strong>Response Time:</strong> We typically respond within 48 hours
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Policy Updates</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an
                  updated "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
