"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 flex items-center justify-center"
          aria-label="Switch language"
        >
          {/* Flag Icon (flat, straight, SVG-based) */}
          <span
            className={`fi fi-${language === "en" ? "gb" : "az"} rounded-sm`}
            style={{ width: "22px", height: "16px" }}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-accent" : ""}
        >
          <span className="fi fi-gb mr-2 rounded-sm" style={{ width: "22px", height: "16px" }} />
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLanguage("az")}
          className={language === "az" ? "bg-accent" : ""}
        >
          <span className="fi fi-az mr-2 rounded-sm" style={{ width: "22px", height: "16px" }} />
          Azərbaycan
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
