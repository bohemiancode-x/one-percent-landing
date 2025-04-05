import React from 'react'
import StackedScreenshots from '../stacked-screenshots'
import BackgroundGradient from '../background-gradient'

const ProfileMakeoverSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
            <BackgroundGradient gradient="5" className="z-0" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                  Profile Makeover
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  NEED PHOTOS?
                  <br />
                  WE GOT YOU.
                </h2>
              </div>

              <StackedScreenshots />

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-gray-400 text-lg mb-8">
                  With the help of AI and our own image editing software developed specifically for dating apps, all of
                  these photos were created by our image experts without the client ever leaving their home.
                </p>
              </div>
            </div>
    </section>
  )
}

export default ProfileMakeoverSection