import Link from "next/link"
import { Github, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">TextLab</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your comprehensive solution for text translation and secure random string generation.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@languagetools.com"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/translator"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Text Translator
                </Link>
              </li>
              <li>
                <Link
                  href="/generator"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  String Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@languagetools.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 TextLab. All rights reserved.</p>
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Next.js
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
