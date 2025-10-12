"use client"

import { useState, useEffect, useRef } from "react"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const lastSectionRef = useRef("home")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting)

      if (intersectingEntries.length > 0) {
        const mostVisible = intersectingEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev
        })

        const sectionId = mostVisible.target.id

        if (sectionId !== lastSectionRef.current) {
          lastSectionRef.current = sectionId
          setActiveSection(sectionId)
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
