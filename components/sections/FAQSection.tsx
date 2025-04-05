import React from 'react'
import { Accordion, AccordionContent, AccordionTrigger,AccordionItem } from '../ui/accordion'
import { Button } from '../ui/button'

const FAQSection = () => {
  return (
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
  )
}

export default FAQSection