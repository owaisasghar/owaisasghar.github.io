"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86%] max-w-sm">
        <SheetHeader className="border-b pb-5 text-left">
          <SheetTitle className="text-xl">
            <span className="text-primary">AA.</span> Portfolio
          </SheetTitle>
          <SheetDescription>AI & Computer Vision Engineer</SheetDescription>
        </SheetHeader>

        <nav className="mt-6 flex flex-col" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className="flex items-center justify-between border-b py-4 text-base font-medium transition-colors hover:text-primary"
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <SheetClose asChild>
          <Button asChild className="mt-8 w-full">
            <Link href="#contact">Let’s work together</Link>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
