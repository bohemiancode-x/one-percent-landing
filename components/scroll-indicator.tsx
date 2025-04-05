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

    if (!indicator || !line || !gradient) return

    const handleScroll = () => {
      // Check if featureListRef is available and has a current value
      if (!featureListRef?.current) return
      
      const featureListRect = featureListRef.current.getBoundingClientRect()
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
      
      // Create a gradient that fades in around the indicator and fades out elsewhere
      // This creates a "spotlight" effect that follows the indicator
      const fadeRange = 30 // Percentage range for fade (adjust as needed)
      const fadeStart = Math.max(0, scrollPercentage * 100 - fadeRange)
      const fadeMiddleStart = Math.max(0, scrollPercentage * 100 - fadeRange/2)
      const fadeMiddleEnd = Math.min(100, scrollPercentage * 100 + fadeRange/2)
      const fadeEnd = Math.min(100, scrollPercentage * 100 + fadeRange)
      
      gradient.style.background = `linear-gradient(to bottom, 
        rgba(255, 255, 255, 0) 0%, 
        rgba(255, 255, 255, 0) ${fadeStart}%, 
        rgba(255, 255, 255, 0.2) ${fadeMiddleStart}%, 
        rgba(255, 255, 255, 0.2) ${fadeMiddleEnd}%, 
        rgba(255, 255, 255, 0) ${fadeEnd}%, 
        rgba(255, 255, 255, 0) 100%)`
    }

    // Create a small delay before attaching the scroll event
    const timeoutId = setTimeout(() => {
      if (featureListRef?.current) {
        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initialize on mount
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [featureListRef])

  return (
    <div className="absolute left-0 md:left-auto md:right-0 h-full pointer-events-none">
      <div ref={lineRef} className="relative h-full w-0.5">
        {/* Line with dynamic gradient fade that follows the indicator */}
        <div 
          ref={gradientRef} 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)' }}
        ></div>
        
        {/* Double-lined blue square indicator */}
        <div
          ref={indicatorRef}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 transition-all duration-300 ease-out"
          style={{ top: "0%" }}
        >
          {/* Outer square */}
          <div className="absolute inset-0 border border-[#5382E7]"></div>
          {/* Inner square (slightly smaller) */}
          <div className="absolute inset-0.5 border border-[#5382E7]"></div>
          {/* Fill color */}
          <div className="absolute inset-1 bg-[#5382E7]"></div>
        </div>
      </div>
    </div>
  )
}