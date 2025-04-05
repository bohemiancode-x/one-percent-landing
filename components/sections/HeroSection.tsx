import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import BackgroundGradient from '../background-gradient'
import Navbar from '../layout/Navbar'

const HeroSection = () => {
  return (
    <section 
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/line-vector.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <BackgroundGradient gradient="1" className="z-0 hidden md:block" />
          <div className="container py-4 md:py-8 mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-full flex flex-col-reverse md:flex-col items-center">
                  <div>
                    <p className="bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent mb-2 font-light text-xl md:text-2xl">For high-value men with a purpose...</p>
                
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                      50 MATCHES
                      <br />
                      GUARANTEED
                    </h1>
                    <p className="text-lg text-white/70 mb-8 font-light">Build a top dating profile in less than 30 days</p>

                  </div>
                  <div className="w-full max-w-3xl h-64 md:h-80 bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
                    <p className="text-gray-500">Video Placeholder</p>
                  </div>
              </div>
              <Button className="bg-[#5382E7] text-white px-8 py-6 text-lg rounded-md font-medium">
                SEE IF YOU QUALIFY
              </Button>
              <p className="mt-6 text-sm text-gray-400">
                From the creators of Todd V's
                <br />
                Digital Black Belt
              </p>
              <div className="mt-4 border-t border-gray-800 w-16 flex justify-center">
                <Image
                    src="/images/black-belt.png"
                      alt="1% Logo"
                      width={0}
                      height={0}
                      className="object-cover w-24"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection