"use client"

import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Trigger animation when user scrolls past 10% of viewport
      if (scrollY > windowHeight * 0.1) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Check initial position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isVisible
}
