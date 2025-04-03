"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollIndicatorProps {
  featureListRef?: React.RefObject<HTMLDivElement>
}

export default function ScrollIndicator({ featureListRef }: ScrollIndicatorProps) {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const indicator = indicatorRef.current
    const line = lineRef.current
    const gradient = gradientRef.current

    if (!indicator || !line || !gradient || !featureListRef?.current) return

    const handleScroll = () => {
      const featureListRect = featureListRef.current!.getBoundingClientRect()
      const featureListTop = featureListRect.top
      const featureListHeight = featureListRect.height
      const windowHeight = window.innerHeight

      // Calculate how far we've scrolled through the feature list
      let scrollPercentage = 0

      if (featureListTop <= windowHeight / 2) {
        // We've scrolled to the feature list
        const scrolledPastFeatureList = Math.max(0, windowHeight / 2 - featureListTop)

        if (scrolledPastFeatureList <= featureListHeight) {
          // Calculate percentage scrolled (0 to 1)
          scrollPercentage = scrolledPastFeatureList / featureListHeight
          scrollPercentage = Math.min(1, Math.max(0, scrollPercentage))
        } else {
          scrollPercentage = 1
        }
      }

      // Update the indicator position based on scroll percentage
      indicator.style.top = `${scrollPercentage * 100}%`
      
      // Adjust gradient opacity based on scroll position to create fading effect
      // As we scroll down, we fade the bottom part of the line
      gradient.style.background = `linear-gradient(to bottom, 
        rgba(255, 255, 255, 0.2) 0%, 
        rgba(255, 255, 255, 0.2) ${scrollPercentage * 100}%, 
        rgba(255, 255, 255, 0) 100%)`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [featureListRef])

  return (
    <div className="absolute left-4 md:left-auto md:right-1/2 md:translate-x-16 top-0 h-full pointer-events-none">
      <div ref={lineRef} className="relative h-full w-0.5">
        {/* Single line with dynamic gradient fade */}
        <div 
          ref={gradientRef} 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)' }}
        ></div>
        
        {/* Double-lined blue square indicator */}
        <div
          ref={indicatorRef}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 transition-all duration-300 ease-out"
          style={{ top: "0%" }}
        >
          {/* Outer square */}
          <div className="absolute inset-0 border border-[#4169e1]"></div>
          {/* Inner square (slightly smaller) */}
          <div className="absolute inset-0.5 border border-[#4169e1]"></div>
          {/* Fill color */}
          <div className="absolute inset-1 bg-[#4169e1]"></div>
        </div>
      </div>
    </div>
  )
}