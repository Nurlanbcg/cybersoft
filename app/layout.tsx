import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "flag-icons/css/flag-icons.min.css"

import "./globals.css"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cybersoft - Building the Future of Web & SaaS",
  description: "Cybersoft designs high-impact websites and scalable SaaS products that help businesses grow.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>
            {children}
            <Toaster />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
