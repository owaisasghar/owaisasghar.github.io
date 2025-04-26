"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip"
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  duration = 600,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const animationClasses = {
    "fade-up": "animate-fade-up",
    "fade-down": "animate-fade-down",
    "fade-left": "animate-fade-left",
    "fade-right": "animate-fade-right",
    "zoom-in": "animate-zoom-in",
    flip: "animate-flip",
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all", isVisible ? animationClasses[animation] : "opacity-0", className)}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
