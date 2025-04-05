import React from 'react'
import { Button } from '../ui/button'
import BackgroundGradient from '../background-gradient'

const CompetitionSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
          <BackgroundGradient gradient="2" className="z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                ONLINE DATING IS
                <br />A COMPETITION
              </h2>
              <div className="space-y-6 text-center">
                <p className="text-gray-300">
                  It's Rigged In Favor Of Men
                  <br />
                  With Looks, Money And Status.
                </p>
                <p className="text-gray-300">
                  The Dating Market Is A <span className="font-semibold text-white">Player-Vs-Player Battlefield</span>
                  <br />
                  —A Place Where Winners Take The Losers' Women.
                </p>
                <p className="text-gray-300">
                  And Inside 1% We Will Make You The Chooser. We Are
                  <br />
                  Here To Give You Abundance So You Can Be The Top
                  <br />
                  1% Of Men.
                </p>
                <p className="text-gray-400 font-medium">THE DATING MARKET IS RUTHLESS</p>
                <p className="text-gray-300">
                  NOT EVERY MAN IS ENTITLED TO A BEAUTIFUL
                  <br />
                  WOMAN
                </p>
                <p className="text-gray-300">1% Was Created To Give You Your Unfair Advantage.</p>
                <p className="text-gray-300">
                  We Will Have You Attracting Beautiful Women So You
                  <br />
                  Can Focus On Your Purpose.
                </p>
              </div>
              <div className="mt-10">
                <Button className="text-white px-8 py-6 text-lg rounded-md font-medium">
                  SEE IF YOU QUALIFY
                </Button>
              </div>
            </div>
          </div>
    </section>
  )
}

export default CompetitionSection