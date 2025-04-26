"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glareSize?: number
  glareOpacity?: number
  rotationIntensity?: number
  borderRadius?: string
}

export function AnimatedCard({
  children,
  className,
  glareSize = 100,
  glareOpacity = 0.2,
  rotationIntensity = 10,
  borderRadius = "1rem",
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * rotationIntensity
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * rotationIntensity

    // Calculate glare position
    const glareX = ((mouseX - rect.left) / rect.width) * 100
    const glareY = ((mouseY - rect.top) / rect.height) * 100

    setRotateX(rotateX)
    setRotateY(rotateY)
    setGlareX(glareX)
    setGlareY(glareY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlareX(50)
    setGlareY(50)
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden transition-transform duration-200", className)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        borderRadius,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareOpacity}), transparent ${glareSize}%)`,
        }}
      />
    </div>
  )
}
