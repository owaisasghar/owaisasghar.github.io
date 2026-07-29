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
    const form = e.currentTarget

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      if (!accessKey) throw new Error("The contact form has not been configured yet. Please email me directly.")

      const formData = new FormData(form)
      formData.append("access_key", accessKey)
      formData.append("from_name", "Awais Asghar Portfolio")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const result = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !result.success) throw new Error(result.message || "Your message could not be sent.")

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. Your message has been emailed to me and I'll get back to you soon.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Message not sent",
        description: error instanceof Error ? error.message : "Please email me directly instead.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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

            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" minLength={2} maxLength={100} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" maxLength={254} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="How can I help you?" minLength={3} maxLength={150} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} minLength={10} maxLength={3000} required />
                  </div>
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
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
