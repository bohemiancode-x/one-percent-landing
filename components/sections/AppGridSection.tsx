import React from 'react'
import IconItem from '../icon-item'
import Image from 'next/image'
import BackgroundGradient from '../background-gradient'

const AppGridSection = () => {
  return (
    <section 
          className="py-16 relative flex justify-center items-center min-h-[75vh]" 
          style={{
            backgroundImage: "url('/images/apps-vector.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <BackgroundGradient gradient="3" className="z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="relative grid grid-cols-3 gap-4 max-w-xs mx-auto">
              {/* Top Row */}
              <IconItem imageSrc="/images/notes.png" name="Notes" />
              <IconItem imageSrc="/images/reminder.png" name="Reminder" />
              <IconItem imageSrc="/images/clock.png" name="Clock" />

              {/* Bottom Row */}
              <IconItem imageSrc="/images/apple-tv.png" name="TV" />
              <div className="">
                <Image
                  src="/images/1-percent.png"
                  alt="1% Logo"
                  width={0}
                  height={0}
                  className="object-contain w-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                />
              </div>
              <IconItem imageSrc="/images/app-store.png" name="App Store" />
              <IconItem imageSrc="/images/health.png" name="Health" />
              <IconItem imageSrc="/images/wallet.png" name="Wallet" />
              <IconItem imageSrc="/images/settings.png" name="Settings" />
            </div>
          </div>
    </section>
  )
}

export default AppGridSection