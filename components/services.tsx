"use client"

import { Card } from "@/components/ui/card"
import { Globe, Layers, Cloud, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      title: t.services.websiteDev.title,
      description: t.services.websiteDev.description,
      features: t.services.websiteDev.features,
    },
    {
      icon: Layers,
      title: t.services.saas.title,
      description: t.services.saas.description,
      features: t.services.saas.features,
    },
    {
      icon: Cloud,
      title: t.services.cloud.title,
      description: t.services.cloud.description,
      features: t.services.cloud.features,
    },
  ]

  const process = t.services.process

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {t.services.title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.titleHighlight}
            </span>
          </h2>
          <p className="mb-16 text-pretty text-lg text-muted-foreground">{t.services.description}</p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
              <p className="mb-6 text-muted-foreground">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-12 text-center text-3xl font-bold">{t.services.processTitle}</h3>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h4 className="mb-2 text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-blue-500 to-purple-600 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
