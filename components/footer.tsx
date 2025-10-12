"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Detect current theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* ---- Clickable Logo ---- */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative h-8 w-8">
              <Image
                key={theme} // ← this forces re-render when theme changes
                src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"} 
                alt="Cybersoft Logo"
                width={36}
                height={36}
                className="rounded-lg transition-all duration-300"
                priority
              />
            </div>
            <span className="text-xl font-bold">Cybersoft</span>
          </Link>


          {/* ---- Social Icons ---- */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-foreground dark:hover:text-blue-400"
            >
              <Twitter className="h-5 w-5 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground dark:hover:text-gray-100"
            >
              <Github className="h-5 w-5 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground dark:hover:text-blue-400"
            >
              <Linkedin className="h-5 w-5 transition-transform hover:scale-110" />
            </a>
          </div>

          {/* ---- Rights ---- */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Cybersoft. {t.footer.rights}
          </p>
        </div>

        {/* ---- Tagline ---- */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
