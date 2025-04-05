"use client"

import { useRef } from "react"
import Image from "next/image"
import CountdownTimer from "@/components/countdown-timer"
import SectionDivider from "@/components/section-divider"
import { CaseStudies } from "@/components/sections/CaseStudies"
import Footer from "@/components/layout/Footer"
import FAQSection from "@/components/sections/FAQSection"
import AutoPilotSection from "@/components/sections/AutoPilotSection"
import TopOnePercentSection from "@/components/sections/TopOnePercentSection"
import ProfileMakeoverSection from "@/components/sections/ProfileMakeoverSection"
import ToolboxSection from "@/components/sections/ToolboxSection"
import CompetitionSection from "@/components/sections/CompetitionSection"
import HeroSection from "@/components/sections/HeroSection"
import AppGridSection from "@/components/sections/AppGridSection"

export default function Home() {
  const featureListRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Sticky Waitlist Timer */}
      <div className="sticky top-0 z-50 w-full bg-[#5382E7] text-white py-1 md:py-2 px-4 flex items-center justify-center" style={{ minHeight: '30px' }}>
        <CountdownTimer />
      </div>
      <main className="min-h-screen text-white relative overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* You're Fighting A Rigged Game Section Divider */}
        <SectionDivider text="YOU'RE FIGHTING A RIGGED GAME" className="mx-auto px-4" />

        {/* Online Dating Is A Competition Section */}
        <CompetitionSection />

        {/* Welcome to 1% Section Divider */}
        <SectionDivider text="WELCOME TO 1%" className=" mx-auto px-4" />

        {/* App Icons Grid Section */}
        <AppGridSection />
        {/* The Ultimate Cheat Code Section Divider */}
        <SectionDivider text="THE ULTIMATE CHEAT CODE" className=" mx-auto px-4" />

        <section className="relative">
          <div className="absolute inset-0 w-full h-full z-10">
              <Image
                src="/images/dotted-bg-main.svg" 
                alt="Grid pattern background"
                fill
                className="object-cover"
              />
            </div>

          {/* Toolbox Section */}
          <ToolboxSection featureListRef={featureListRef} />

          {/* Need Photos Section */}
          <ProfileMakeoverSection />

          {/* Not Every Man Section */}
          <TopOnePercentSection />

          {/* Auto-Pilot Section */}
          <AutoPilotSection />

          {/* Success Stories Section */}
          <section className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                  Case Studies
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">1% SUCCESS STORIES</h2>
              </div>

              <CaseStudies />
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />
          </section>

        {/* Footer */}
       <Footer />
      </main>
    </>
  )
}

