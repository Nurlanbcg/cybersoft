"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.errors.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid
    }

    if (!formData.projectType) {
      newErrors.projectType = t.contact.form.errors.projectTypeRequired
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  try {
    const response = await fetch("https://contact-worker.<your-username>.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      toast({
        title: t.contact.form.success.title,
        description: t.contact.form.success.description,
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      })
      setErrors({})
    } else {
      toast({
        title: "Error",
        description: data.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    }
  } catch (error) {
    toast({
      title: "Network Error",
      description: "Could not connect to the server. Please try again later.",
      variant: "destructive",
    })
  }
}

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const faqs = t.contact.faq.questions

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {t.contact.title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="mb-16 text-pretty text-lg text-muted-foreground">{t.contact.description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <Card className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {t.contact.form.name} <span className="text-destructive">{t.contact.form.required}</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t.contact.form.email} <span className="text-destructive">{t.contact.form.required}</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">{t.contact.form.company}</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">
                    {t.contact.form.projectType} <span className="text-destructive">{t.contact.form.required}</span>
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                    <SelectTrigger
                      id="projectType"
                      className={`h-10 w-full ${errors.projectType ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder={t.contact.form.selectType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">{t.contact.form.projectTypes.website}</SelectItem>
                      <SelectItem value="saas">{t.contact.form.projectTypes.saas}</SelectItem>
                      <SelectItem value="integration">{t.contact.form.projectTypes.integration}</SelectItem>
                      <SelectItem value="other">{t.contact.form.projectTypes.other}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && <p className="text-sm text-destructive">{errors.projectType}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {t.contact.form.message} <span className="text-destructive">{t.contact.form.required}</span>
                </Label>
                <Textarea
                  id="message"
                  rows={8}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={errors.message ? "border-destructive" : ""}
                  placeholder={t.contact.form.messagePlaceholder}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                {t.contact.form.send}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{t.contact.info.email}</p>
                    <a
                      href="mailto:sales@cybersoft.az"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      sales@cybersoft.az
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">{t.contact.info.location}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">{t.contact.faq.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
