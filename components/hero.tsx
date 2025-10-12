"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-muted-foreground">{t.hero.badge}</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">{t.hero.description}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              {t.hero.getStarted}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
              {t.hero.seeServices}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-16 w-screen overflow-hidden">
        <div className="relative overflow-hidden border-y border-border bg-gradient-to-br from-blue-50 to-purple-50 py-8 shadow-2xl dark:from-blue-950/20 dark:to-purple-950/20">
          {/* First row - 3 cards moving right to left */}
          <div className="mb-4 flex gap-4 overflow-hidden">
            <div className="flex animate-scroll-left gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-32 w-64 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
                />
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-scroll-left gap-4" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={`dup-${i}`}
                  className="h-32 w-64 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-blue-900/30"
                />
              ))}
            </div>
          </div>

          {/* Second row - 2 larger cards moving right to left (slower) */}
          <div className="flex gap-4 overflow-hidden">
            <div className="flex animate-scroll-left-slow gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-40 w-80 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
                />
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-scroll-left-slow gap-4" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={`dup-${i}`}
                  className="h-40 w-80 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
