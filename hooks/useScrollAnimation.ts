"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible when entering viewport, invisible when leaving
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin, // This adds some margin to trigger animations slightly before/after
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
  }, [threshold, rootMargin])

  return [ref, isVisible] as const
}
