"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
  backgroundImage?: string
  duration?: number
  borderRadius?: string
  borderWidth?: string
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  gradientClassName,
  backgroundImage,
  duration = 3,
  borderRadius = "1rem",
  borderWidth = "2px",
}: AnimatedGradientBorderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={cn("relative p-[2px] rounded-2xl overflow-hidden mt-16", containerClassName)}
        style={{ borderRadius }}
      >
        <div className={cn("relative z-10 bg-background rounded-2xl", className)} style={{ borderRadius }}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("relative p-[2px] rounded-2xl overflow-hidden mt-16", containerClassName)}
      style={{ borderRadius }}
    >
      {/* Static background image layer */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Animated gradient layer */}
      <div
        className={cn(
          "absolute inset-0 z-1 overflow-hidden animate-spin-slow",
          gradientClassName || "bg-gradient-to-r from-primary via-purple-500 to-primary opacity-70",
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      />
      <div className={cn("relative z-10 bg-background rounded-2xl", className)} style={{ borderRadius }}>
        {children}
      </div>
    </div>
  )
}
