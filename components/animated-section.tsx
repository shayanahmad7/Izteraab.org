"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "slide-up"
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, animation = "fade-up", delay = 0, id }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-down":
          return `${baseClasses} opacity-0 -translate-y-8`
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-8`
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "scale-up":
          return `${baseClasses} opacity-0 scale-95`
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-12`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} id={id} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
