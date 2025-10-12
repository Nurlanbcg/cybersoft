"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const { t } = useLanguage()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* --- LOGO SECTION (Clickable) --- */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold">
          <Image
            src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
            alt="Cybersoft Logo"
            width={36}
            height={36}
            className="rounded-lg transition-all duration-300"
            priority
          />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cybersoft
          </span>
        </Link>

        {/* --- NAVIGATION LINKS --- */}
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative min-w-fit text-sm font-medium transition-colors hover:text-foreground",
                    activeSection === link.id ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              {t.hero.getStarted}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
