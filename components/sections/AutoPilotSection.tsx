import React from 'react'
import { Button } from '../ui/button'

const AutoPilotSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="4" className="z-0" /> */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                  ARE YOU READY TO PUT YOUR
                  <br />
                  DATING LIFE ON <br className="md:hidden"/>AUTO-PILOT
                </h2>
                <Button className="text-white px-8 py-6 text-lg rounded-md font-medium">
                  SEE IF YOU QUALIFY
                </Button>
              </div>
            </div>
    </section>
  )
}

export default AutoPilotSection