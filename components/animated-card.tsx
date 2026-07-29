"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glareSize?: number
  glareOpacity?: number
  rotationIntensity?: number
  borderRadius?: string
}

export function AnimatedCard({ children, className, borderRadius = "1rem" }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
        className,
      )}
      style={{ borderRadius }}
    >
      {children}
    </div>
  )
}
