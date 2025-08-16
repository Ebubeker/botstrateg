"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: "slow" | "medium" | "fast"
  className?: string
}

export function ParallaxContainer({ children, speed = "medium", className = "" }: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || isMobile) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rect = container.getBoundingClientRect()
      const containerTop = rect.top + scrolled
      const containerHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in viewport
      if (containerTop < scrolled + windowHeight && containerTop + containerHeight > scrolled) {
        const speedMultiplier = speed === "slow" ? 0.1 : speed === "medium" ? 0.15 : 0.2
        const yPos = -(scrolled - containerTop) * speedMultiplier

        container.style.setProperty(`--parallax-offset-${speed}`, `${yPos}px`)
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [speed, isMobile])

  return (
    <div ref={containerRef} className={`${!isMobile ? `parallax-${speed}` : ""} ${className}`}>
      {children}
    </div>
  )
}
