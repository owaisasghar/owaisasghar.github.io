"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              Interested in collaborating on AI projects or have questions about my work? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Fill out the form or contact me directly using the information below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">awaisasghar900@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+92 307 5240227</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Connect with me</h4>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/owaisasghar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/awais-asghar-9b9b27175/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:awaisasghar900@gmail.com"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={5} required />
                  </div>
                </div>

                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
