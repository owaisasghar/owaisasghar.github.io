"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  words: string[]
  className?: string
  speed?: number
  delay?: number
}

export function TypewriterEffect({ words, className, speed = 100, delay = 1500 }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        // Current word being processed
        const currentWord = words[currentWordIndex]

        // If deleting, remove the last character
        if (isDeleting) {
          setCurrentText((prev) => prev.substring(0, prev.length - 1))
        } else {
          // If typing, add the next character
          setCurrentText((prev) => currentWord.substring(0, prev.length + 1))
        }

        // If word is complete and not deleting, start deleting after delay
        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay)
        }
        // If word is deleted, move to next word
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay])

  return (
    <span className={cn("text-primary font-bold", className)}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

interface WordShuffleProps {
  text: string
  className?: string
  duration?: number
}

export function WordShuffleEffect({ text, className, duration = 2000 }: WordShuffleProps) {
  const [shuffledText, setShuffledText] = useState(text)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleMouseOver = () => {
    let iteration = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setShuffledText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }

      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    // Trigger the effect on mount
    handleMouseOver()

    // And periodically
    const timer = setInterval(() => {
      handleMouseOver()
    }, duration)

    return () => clearInterval(timer)
  }, [])

  return (
    <span className={cn("inline-block", className)} onMouseOver={handleMouseOver}>
      {shuffledText}
    </span>
  )
}

interface RotatingWordsProps {
  staticText?: string
  words: string[]
  className?: string
  wordClassName?: string
}

export function RotatingWordsEffect({ staticText, words, className, wordClassName }: RotatingWordsProps) {
  return (
    <div className={cn("flex items-center gap-1 flex-wrap", className)}>
      {staticText && <span>{staticText}</span>}
      <div className="relative h-8 md:h-10 overflow-hidden">
        <div className="words-rotate m-0 p-0 animate-word-rotation">
          {words.map((word, index) => (
            <div
              key={index}
              className={cn(
                "absolute opacity-0 top-0 left-0 right-0 text-primary font-bold",
                "animate-word-rotate-item",
                wordClassName,
              )}
              style={{
                animationDelay: `${index * 2}s`,
                animationDuration: `${words.length * 2}s`,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface GradientTextProps {
  text: string
  className?: string
}

export function GradientTextEffect({ text, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent",
        "bg-[length:200%_auto] animate-text-gradient",
        className,
      )}
    >
      {text}
    </span>
  )
}

interface TextRevealProps {
  text: string
  className?: string
}

export function TextRevealEffect({ text, className }: TextRevealProps) {
  return (
    <div className={cn("relative overflow-hidden inline-block", className)}>
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 animate-text-reveal">{text}</span>
    </div>
  )
}
