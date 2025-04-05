import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const TopOnePercentSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="6" className="z-0" /> */}
            <div 
              className="absolute inset-0 w-full h-full z-0 bg-transparent"
              style={{ 
                height: "15rem",
                background: `linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)` 
              }} 
            >
            <Image
              src="/images/dotted-bg.svg" 
              alt="Grid pattern background"
              fill
              className="object-cover"
            />
          </div> 
            <div className="container mx-auto px-4 relative z-10">
                <div className=" w-fit mx-auto px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                   This might not be for you..
                </div>
                  <h2 className="text-4xl text-center md:hidden  md:text-5xl font-bold">
                    NOT EVERY MAN
                    <br />
                    CAN BE IN THE
                    <br />
                    TOP 1%
                  </h2>
              <div className="flex flex-col-reverse my-5  md:grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="space-y-6 text-center md:text-start">
                <h2 className="text-4xl hidden md:block text-start  md:text-5xl font-bold">
                    NOT EVERY MAN
                    <br />
                    CAN BE IN THE
                    <br />
                    TOP 1%
                  </h2>
                  <p className="text-gray-300">1% doesn't just get you matches, <span className="font-bold inline-block md:inline-flex">we give you abundance. </span></p>
                  <p className="text-gray-300">
                    Dating 9's and 10's requires you to have the right mindset and confidence. And to get there, <span className="font-bold">you need
                    lots of beautiful leads filling your inbox every day.</span> 
                  </p>
                  <p className="text-gray-300">
                    <span className="font-bold">Most men get 1/2 a match a day. You won't.</span> With 1%, you're taking a strategic approach to online dating.
                    You'll have photos that get matches and send messages that get dates.
                  </p>
                  <p className="text-gray-300">
                    1% members <span className="font-bold">have their shit together. </span> If you're broke, lazy and don't care about your appearance, you'll
                    just be catfishing tons of women. Not everyone can be in the top 1%.
                  </p>
                  <div className="pt-4">
                    <Button className="text-white px-8 py-6 text-lg rounded-md font-medium">
                      SEE IF YOU QUALIFY
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    
                    <Image
                      src="/images/app-screenshots.png"
                      alt="App Screenshot"
                      width={2000}
                      height={0}
                      className="rounded-3xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default TopOnePercentSection