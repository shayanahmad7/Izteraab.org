"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-up" | "slide-up"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation(threshold, "-50px 0px -50px 0px")

  const getAnimationClass = () => {
    const baseClass = isVisible ? "animate-in" : "animate-out"
    const delayClass = delay > 0 ? `animation-delay-${delay}` : ""

    switch (animation) {
      case "fade-left":
        return `${baseClass} slide-in-from-left-8 fade-in duration-700 ease-out ${delayClass}`
      case "fade-right":
        return `${baseClass} slide-in-from-right-8 fade-in duration-700 ease-out ${delayClass}`
      case "scale-up":
        return `${baseClass} zoom-in-95 fade-in duration-500 ease-out ${delayClass}`
      case "slide-up":
        return `${baseClass} slide-in-from-bottom-8 duration-600 ease-out ${delayClass}`
      default:
        return `${baseClass} slide-in-from-bottom-4 fade-in duration-600 ease-out ${delayClass}`
    }
  }

  return (
    <section ref={ref} className={`${className} ${getAnimationClass()} transition-all`}>
      {children}
    </section>
  )
}
