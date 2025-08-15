"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fade-in" | "fade-in-up" | "fade-in-left" | "fade-in-right"
  delay?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true)
          }, delay)

          return () => clearTimeout(timer)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-300 ${className} ${isVisible ? `animate-${animation}` : "opacity-0"}`}
    >
      {children}
    </div>
  )
}
