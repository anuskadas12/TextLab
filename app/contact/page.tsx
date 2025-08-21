import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or need support? We'd love to hear from you. Reach out and we'll get back to you
              as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-32" />
                </div>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">For general inquiries and support:</p>
                  <a href="mailto:support@textlab.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    support@textlab.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Available Monday - Friday, 9 AM - 5 PM EST:</p>
                  <a href="tel:+1-555-0123" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +1 (555) 012-3456
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Tech Street
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Response</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    We typically respond to all inquiries within 24 hours during business days. For urgent technical
                    issues, please include "URGENT" in your subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
