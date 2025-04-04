"use client"

import { useRef } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import BackgroundGradient from "@/components/background-gradient"
import SectionDivider from "@/components/section-divider"
import ScrollIndicator from "@/components/scroll-indicator"
import FeatureItem from "@/components/feature-item"
import Navbar from "@/components/navbar"
import IconItem from "@/components/icon-item"
import CaseStudies from "@/components/case-studies"
import StackedScreenshots from "@/components/stacked-screenshots"

export default function Home() {
  const featureListRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Sticky Waitlist Timer */}
      <div className="sticky top-0 z-50 w-full bg-[#5382E7] text-white py-2 px-4 flex items-center justify-center" style={{ minHeight: '50px' }}>
        <CountdownTimer />
      </div>
      <main className="min-h-screen text-white relative overflow-hidden">
        

        {/* Hero Section */}
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
          <BackgroundGradient gradient="1" className="z-0" />
          <div className="container py-4 md:py-8 mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-full flex flex-col-reverse md:flex-col items-center">
                  <div>
                    <p className="bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent mb-2 font-light text-lg">For high-value men with a purpose...</p>
                
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
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

        {/* You're Fighting A Rigged Game Section Divider */}
        <SectionDivider text="YOU'RE FIGHTING A RIGGED GAME" className="mx-auto px-4" />

        {/* Online Dating Is A Competition Section */}
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

        {/* Welcome to 1% Section Divider */}
        <SectionDivider text="WELCOME TO 1%" className=" mx-auto px-4" />

        {/* App Icons Grid Section */}
        <section 
          className="py-16 relative flex justify-center items-center min-h-[75vh]" 
          style={{
            backgroundImage: "url('/images/apps-vector.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="absolute inset-0 w-full h-full z-10">
            <Image
              src="/images/apps-vector.svg" 
              alt="Grid pattern background"
              fill
              className="object-cover"
            />
          </div> */}
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
          <section className="py-16 md:py-24 relative">
            
            <BackgroundGradient gradient="4" className="z-0" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                  The Triple Threat
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                  YOUR TOOLBOX TO ATTRACT
                  <br />
                  BEAUTIFUL MATCHES
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative">
                <ScrollIndicator featureListRef={featureListRef} />
                <div className="space-y-12 ml-10 md:ml-0" ref={featureListRef}>
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

                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    {/* Phone mockups */}
                    <div className="relative">
                      <div className="md:ml-[18%] w-full">
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

          {/* Need Photos Section */}
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

          {/* Not Every Man Section */}
          <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="6" className="z-0" /> */}
            <div className="absolute inset-0 w-full h-full z-10">
            <Image
              src="/images/dotted-bg.svg" 
              alt="Grid pattern background"
              fill
              className="object-cover"
            />
          </div> 
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    NOT EVERY MAN
                    <br />
                    CAN BE IN THE
                    <br />
                    TOP 1%
                  </h2>
                  <p className="text-gray-300">1% doesn't just get you matches—we give you abundance.</p>
                  <p className="text-gray-300">
                    Dating 9's and 10's requires you to have the right mindset and confidence. And to get there, you need
                    lots of beautiful leads filling your inbox every day.
                  </p>
                  <p className="text-gray-300">
                    Most men get 1/2 a match a day. You won't. With 1%, you're taking a strategic approach to online dating.
                    You'll have photos that get matches and send messages that get dates.
                  </p>
                  <p className="text-gray-300">
                    1% members have their shit together. If you're broke, lazy and don't care about your appearance, you'll
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

          {/* Auto-Pilot Section */}
          <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="4" className="z-0" /> */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                  ARE YOU READY TO PUT YOUR
                  <br />
                  DATING LIFE ON AUTO-PILOT
                </h2>
                <Button className="text-white px-8 py-6 text-lg rounded-md font-medium">
                  SEE IF YOU QUALIFY
                </Button>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="2" className="z-0" /> */}
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
          <section className="py-16 md:py-24 relative">
            {/* <BackgroundGradient gradient="5" className="z-0" /> */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-xl text-gray-300 mb-6">
                  I Have Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  FREQUENTLY ASKED
                  <br />
                  QUESTIONS
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      What happens if I can't get 50 matches in 30 days?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    If you don’t get 50 matches in 30 days, then we’ll happily refund you. That’s how confident we are in our offer.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      How quickly will I get 50 matches?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    To be a good fit for 1%, you must be a solid, high-value man and coachable. Going on dates is not just about having a good profile but also about giving women a great experience. If women consistently have bad experiences, then they’ll start to become distrustful of dating apps. This is why we prioritize being congruent to your profile. Moreover, being coachable in insanely important as we put in a lot of effort to make sure you have a top profile and back it up with a money-back guarantee. If you’re not going to be responsive, then you’re going to make it very difficult for us to deliver results.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">Does my age matter?</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    As long as you’re of age to use dating apps, then you’ll be fine. If you’re trying to date women much younger than you or much older than you are, then you may have to adjust the age of your profile to show up in women’s filters. However, we strongly urge you to be transparent about your real age with your matches.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      I have zero experience with online dating. Is it a problem?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    Having zero experience with dating apps is totally fine. There will be resources inside the community to get you up to speed.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      Is this a coaching program?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    We don’t just sign you up and abandon you. There are real humans behind the scenes creating your photos and assisting you with your profile. Therefore, our bandwidth is limited. We can’t just hire anyone off the street to be an image editor, and all of our mentors have lots of experience with dating apps and dating in general.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-6"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      I don't have a lot of time available, can I still apply?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    While we do most of the heavy lifting for you, we don’t control your profile or your device. This means that you will need to spend at least 10-15 minutes a day to test new photos and keep your profile active enough for the algorithm to continue showing your profile to women. If you don’t have an existing profile, expect to spend around 20-30 minutes initially to set up and launch your profile.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-7"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      I live in X country. Is it a problem?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    Living in a city with a large population will definitely give you more leads. In addition, make sure dating apps are allowed in your country.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-8"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      What am I getting access to?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    You’ll get access to the 1% Community which is accessible via our own web application. You’ll be able to get your photos and assistance from mentors all inside the application.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-9"
                    className="border border-gray-800 rounded-md bg-gray-900 bg-opacity-50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">Still have questions?</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                    Email us at support@onepercent.dating :)
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-12 text-center">
                  <Button className=" text-white px-8 py-6 text-lg rounded-md font-medium w-full md:w-full">
                    SEE IF YOU QUALIFY
                  </Button>
                  <p className="mt-4 w-fit flex items-center gap-2 text-center m-auto text-sm text-gray-400">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_10648)">
                        <g clipPath="url(#clip1_1_10648)">
                        <g clipPath="url(#clip2_1_10648)">
                        <path d="M18.0703 6.13828V8.65061L19.0573 8.00851L21.9572 6.12202L19.0573 5.49609L18.0703 6.13828Z" fill="white"/>
                        <path d="M2.90379 10.0815L0.00390625 11.9679L9.74146 14.0698L14.3575 11.067V8.55469L9.74146 11.5575L2.90379 10.0815Z" fill="white"/>
                        <path d="M14.2248 7.82259L4.65838 5.60938L0.00390625 8.6372L9.74146 10.739L14.2248 7.82259Z" fill="white"/>
                        <path d="M21.959 2.79327L12.2215 0.691406L8.47266 3.1301L18.072 5.32179L21.959 2.79327Z" fill="white"/>
                        <path d="M2.90379 13.4137L0.00390625 15.3001L9.74146 17.4019L14.3575 14.399V11.8867L9.74146 14.8895L2.90379 13.4137Z" fill="white"/>
                        <path d="M18.0703 9.47031V11.9827L21.9572 9.45412L19.0572 8.82812L18.0703 9.47031Z" fill="white"/>
                        <path d="M18.0703 12.9195V15.4318L21.9572 12.9033L19.0572 12.2773L18.0703 12.9195Z" fill="white"/>
                        <path d="M2.90379 16.8628L0.00390625 18.7492L9.74146 20.8511L14.3575 17.8483V15.3359L9.74146 18.3388L2.90379 16.8628Z" fill="white"/>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_10648">
                        <rect width="22" height="20.16" fill="white" transform="translate(0 0.691406)"/>
                        </clipPath>
                        <clipPath id="clip1_1_10648">
                        <rect width="22" height="20.16" fill="white" transform="translate(0 0.691406)"/>
                        </clipPath>
                        <clipPath id="clip2_1_10648">
                        <rect width="21.9927" height="20.16" fill="white" transform="translate(0.00390625 0.691406)"/>
                        </clipPath>
                        </defs>
                      </svg>

                    <span className="text-white font-semibold">Access the top 1% of men</span></p>
                </div>
              </div>
            </div>
          </section>
        </section>


        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Manage Membership
              </a>
            </div>
            <div className="mt-6 text-center">
              <a href="mailto:support@onepercent.dating" className="text-sm text-gray-400 hover:text-white">
                support@onepercent.dating
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

