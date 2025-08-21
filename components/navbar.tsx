"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Languages, Shuffle, Menu, X, Info, Mail, HelpCircle, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/translator", label: "Translator", icon: Languages },
    { href: "/generator", label: "Generator", icon: Shuffle },
  ]

  const secondaryNavItems = [
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/help", label: "Help", icon: HelpCircle },
    { href: "/privacy", label: "Privacy", icon: Shield },
  ]

  const closeSheet = () => setIsOpen(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - positioned absolutely to left */}
          <Link
            href="/"
            className="absolute left-0 font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-green-700 transition-all duration-200"
          >
            TextLab
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}>
                <Button
                  variant={pathname === href ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "flex items-center gap-2 transition-all duration-200 hover:scale-105",
                    pathname === href && "bg-primary text-primary-foreground shadow-md",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              </Link>
            ))}

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

            {secondaryNavItems.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}>
                <Button
                  variant={pathname === href ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "flex items-center gap-2 transition-all duration-200",
                    pathname === href && "bg-secondary text-secondary-foreground",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="lg:hidden absolute right-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Navigation</h2>
                  <Button variant="ghost" size="sm" onClick={closeSheet} className="p-2">
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      Main Tools
                    </h3>
                    <div className="space-y-1">
                      {mainNavItems.map(({ href, label, icon: Icon }) => (
                        <Link key={href} href={href} onClick={closeSheet}>
                          <Button
                            variant={pathname === href ? "default" : "ghost"}
                            className={cn(
                              "w-full justify-start gap-3 h-12",
                              pathname === href && "bg-primary text-primary-foreground",
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            {label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      Information
                    </h3>
                    <div className="space-y-1">
                      {secondaryNavItems.map(({ href, label, icon: Icon }) => (
                        <Link key={href} href={href} onClick={closeSheet}>
                          <Button
                            variant={pathname === href ? "secondary" : "ghost"}
                            className={cn(
                              "w-full justify-start gap-3 h-12",
                              pathname === href && "bg-secondary text-secondary-foreground",
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            {label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
