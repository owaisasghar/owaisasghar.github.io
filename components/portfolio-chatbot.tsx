"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  role: "user" | "assistant"
  content: string
}

const suggestions = [
  "What are Awais's strongest AI skills?",
  "Tell me about his drone projects.",
  "Does he have LLM and RAG experience?",
]

const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I’m Awais’s portfolio assistant. Ask me about his projects, experience, skills, research, or contact details.",
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function ask(rawQuestion: string) {
    const cleanQuestion = rawQuestion.trim()
    if (!cleanQuestion || loading) return

    setQuestion("")
    setLoading(true)
    setMessages((current) => [...current, { role: "user", content: cleanQuestion }])

    try {
      if (!apiUrl) throw new Error("The chatbot API has not been configured yet.")

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: cleanQuestion,
          history: messages.slice(-4).map(({ role, content }) => ({ role, content })),
        }),
      })
      const data = (await response.json()) as { answer?: string; error?: string; remaining?: number }
      if (!response.ok) throw new Error(data.error || "I couldn’t answer that question.")

      setRemaining(typeof data.remaining === "number" ? data.remaining : null)
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer || "I couldn’t find that in Awais’s portfolio." },
      ])
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: error instanceof Error ? error.message : "The chatbot is temporarily unavailable. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    void ask(question)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          role="dialog"
          aria-label="Portfolio assistant"
          className="mb-4 flex h-[min(620px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl"
        >
          <div className="flex items-center justify-between bg-foreground px-4 py-3 text-background">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/15 p-2"><Bot className="h-5 w-5" /></div>
              <div>
                <p className="font-semibold">Ask about Awais</p>
                <p className="text-xs text-white/80">AI portfolio assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white hover:bg-white/15 hover:text-white" aria-label="Close chatbot">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  message.role === "user" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-muted text-foreground"
                }`}>
                  {message.content}
                </p>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="space-y-2 pt-1">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} onClick={() => void ask(suggestion)} className="block w-full rounded-xl border px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-foreground">
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" /> Thinking…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={submit} className="border-t bg-background p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value.slice(0, 500))}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault()
                    if (question.trim()) void ask(question)
                  }
                }}
                placeholder="Ask about projects, skills, or experience…"
                rows={1}
                disabled={loading}
                className="max-h-24 min-h-10 flex-1 resize-none rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" size="icon" disabled={loading || !question.trim()} className="shrink-0 rounded-xl" aria-label="Send question">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              {remaining === null ? "Up to 10 questions per visitor daily" : `${remaining} questions remaining today`}
            </p>
          </form>
        </div>
      )}

      <Button
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        className={`relative h-14 rounded-full border-foreground bg-foreground text-background shadow-md transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg ${
          open ? "w-14 px-0" : "gap-2.5 px-5"
        }`}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <span className="relative">
              <Bot className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-foreground bg-emerald-400"></span>
            </span>
            <span className="text-sm font-semibold">Ask Awais AI</span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </>
        )}
      </Button>
    </div>
  )
}
