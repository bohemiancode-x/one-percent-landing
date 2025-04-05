"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 24,
    seconds: 46,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex text-center items-center justify-center md:gap-4 w-full max-w-6xl mx-auto">
      <div className="text-sm hidden md:block md:text-base font-medium">SPOTS FOR THE 1% CLOSES IN</div>
      <div className="text-sm md:hidden md:text-base font-semibold mx-3">SPOTS CLOSE IN</div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center">
          <div className="px-1 py-1 text-sm md:text-base font-bold">{timeLeft.days}</div>
          <span className="text-xs opacity-50">D</span>
        </div>
        <span>:</span>
        <div className="flex items-center">
          <div className=" px-1 py-1 text-sm md:text-base font-bold">
            {timeLeft.hours}
          </div>
          <span className="text-xs opacity-50">H</span>
        </div>
        <span>:</span>
        <div className="flex items-center">
          <div className="px-1 py-1 text-sm md:text-base font-bold">
            {timeLeft.minutes}
          </div>
          <span className="text-xs ml-0 opacity-50">M</span>
        </div>
        <span>:</span>
        <div className="flex items-center">
          <div className=" px-1 py-1 text-sm md:text-base font-bold">
            {timeLeft.seconds}
          </div>
          <span className="text-xs opacity-50">S</span>
        </div>
      </div>
      <Button variant={"link"} className="text-xs hidden md:block md:text-sm text-white underline font-medium px-2 md:px-4 py-1">
        ENTER WAIT LIST
      </Button>
    </div>
  )
}

