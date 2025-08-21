"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Languages, Shuffle, Github } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/translator", label: "Translator", icon: Languages },
    { href: "/generator", label: "Generator", icon: Shuffle },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            TextLab
          </Link>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex space-x-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <Button
                    variant={pathname === href ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center gap-2 transition-all duration-200",
                      pathname === href && "bg-primary text-primary-foreground shadow-sm",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex sm:hidden space-x-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <Button
                    variant={pathname === href ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "p-2 transition-all duration-200",
                      pathname === href && "bg-primary text-primary-foreground shadow-sm",
                    )}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                </Link>
              ))}
            </div>

            <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
