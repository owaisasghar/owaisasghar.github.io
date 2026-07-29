"use client"

import type React from "react"
import { cn } from "@/lib/utils"

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
  backgroundImage,
  borderRadius = "1rem",
}: AnimatedGradientBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden border border-border bg-card shadow-sm", containerClassName)}
      style={{
        borderRadius,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={cn("relative z-10 bg-card", className)} style={{ borderRadius }}>
        {children}
      </div>
    </div>
  )
}
