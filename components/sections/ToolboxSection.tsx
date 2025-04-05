import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import ScrollIndicator from '../scroll-indicator'
import FeatureItem from '../feature-item'
import BackgroundGradient from '../background-gradient'

const ToolboxSection = ({featureListRef}: any) => {
  return (
    <section className="py-16 md:py-24 relative">
            
            <BackgroundGradient gradient="4" className="z-0" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                  The Triple Threat
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                  YOUR TOOLBOX TO ATTRACT
                  <br />
                  BEAUTIFUL MATCHES
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative md:px-8" ref={featureListRef}>
                <div className="relative" ref={featureListRef}>
                  {/* Mobile placement - inside the feature list div */}
                  <div className="md:hidden">
                    <ScrollIndicator featureListRef={featureListRef} />
                  </div>
                  
                  
                  <div className="flex flex-col gap-12 ml-4 md:ml-0 ">
                    <div className="aspect-video md:h-0 bg-gray-800 rounded-lg mb-8 flex md:hidden items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                    {/* Image Studio */}
                    <div>
                      <h3 className="flex items-center text-xl font-semibold mb-6">
                        <span className="mr-2 text-2xl">
                          <Image
                            src="/images/grad-cap.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            className="object-contain w-full"
                          />  
                        </span> 
                        <span className="bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent">
                          IMAGE STUDIO
                        </span>
                      </h3>
                      <div className="space-y-4">
                        <FeatureItem>Design images of you with our Image Experts</FeatureItem>
                        <FeatureItem>Use images that are proven to work</FeatureItem>
                        <FeatureItem>Passes Selfie Verification & Reverse Image Search</FeatureItem>
                      </div>
                    </div>

                    {/* Network with the Best */}
                    <div className="aspect-video md:h-0 bg-gray-800 rounded-lg mb-8 flex md:hidden items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                    <div>
                      <h3 className="flex items-center text-xl font-semibold mb-6">
                      <span className="mr-2 text-2xl">
                          <Image
                            src="/images/network.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            className="object-contain w-full"
                          />  
                        </span> 
                        <span className="bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent">
                        NETWORK WITH THE BEST
                        </span>
                        
                      </h3>
                      <div className="space-y-4">
                        <FeatureItem>Network with successful men just like you</FeatureItem>
                        <FeatureItem>Learn from men with successful dating lives</FeatureItem>
                        <FeatureItem>Get exclusive advice average men don't have access to</FeatureItem>
                      </div>
                    </div>

                    {/* 50 Matches Guaranteed */}
                    <div className="aspect-video md:h-0 bg-gray-800 rounded-lg mb-8 flex md:hidden items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                    <div>
                      <h3 className="flex items-center text-xl font-semibold mb-6">
                      <span className="mr-2 text-2xl">
                          <Image
                            src="/images/multimillion.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            className="object-contain w-full"
                          />  
                        </span>  
                        <span className="bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent">
                        50 MATCHES GUARANTEED
                        </span>
                        
                      </h3>
                      <div className="space-y-4">
                        <FeatureItem>Get photos recommended that actually work</FeatureItem>
                        <FeatureItem>Get your money back if you don't get 50 matches</FeatureItem>
                        <FeatureItem>Stop guessing and know exactly what to do</FeatureItem>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop placement - between the two columns */}
                <div className="hidden md:block absolute right-1/2 h-full">
                  <ScrollIndicator featureListRef={featureListRef} />
                </div>

                <div className="hidden md:flex items-center justify-center">
                  {/* Phone mockups */}
                  <div className="relative">
                    <div className="relative">
                      <div className="w-full">
                        <Image
                          src="/images/toolbox-phones.png"
                          alt="App Screenshot - Review Images"
                          width={0}
                          height={0}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      

              <div className="mt-16 text-center">
                <Button className="text-white px-8 py-6 text-lg rounded-md font-medium">
                  SEE IF YOU QUALIFY
                </Button>
              </div>
            </div>
          </section>
  )
}

export default ToolboxSection