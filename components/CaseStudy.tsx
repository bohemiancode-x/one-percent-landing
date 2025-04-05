'use client'

import Robert from '@/public/images/robert.png'
import Nicholas from '@/public/images/nicholas.png'
import George from '@/public/images/george.png'
// import Jacob from '@/public/images/caseStudies/jacob/jacob.png'
// import Randy from '@/public/images/caseStudies/randy/randy.png'
// import Travis from '@/public/images/caseStudies/travis/travis.png'
// import Gorge from '@/public/images/caseStudies/gorge/gorge.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { useState } from 'react'
// import { GeorgeCaseStudy } from './caseStudy/George'
// import { GorgeCaseStudy } from './caseStudy/Gorge'
// import { JacobCaseStudy } from './caseStudy/Jacob'
// import { NicholasCaseStudy } from './caseStudy/Nicholas'
// import { RandyCaseStudy } from './caseStudy/Randy'
// import { RobertCaseStudy } from './caseStudy/Robert'
// import { TravisCaseStudy } from './caseStudy/Travis'

const CaseStudiesData = [
  {
    id: 'robert',
    image: Robert,
    name: 'Robert, 61',
    text: "Getting out of two divorces, Robert didn't let his age stop him and was able to go on dates with women 30-40 years old by dialling in his photos, bio and messaging.",
    title: '61 Years Old and 2 Divorces',
    buttonText: 'Read Full Case Study',
    CaseStudyComponent: null,
  },
  {
    id: 'george',
    image: George,
    name: 'George, 21',
    text: 'George just finished college and wanted to finally get his dating life handled. In just 4 weeks, he revamped his profile and finally found a girlfriend to be exclusive with.',
    title: 'Getting a Girlfriend in 4 Weeks with Online Dating',
    buttonText: 'Read Full Case Study',
    CaseStudyComponent: null,
  },
  {
    id: 'nicholas',
    image: Nicholas,
    name: 'Nicholas, 43',
    text: "Recently getting back into dating after a divorce, Nicholas didn't even have a profile ready when he joined the community. But within 4 weeks, he was already going on 2-3 dates every week.",
    title: 'Nicholas completely transformed his dating life',
    buttonText: 'Read Full Case Study',
    CaseStudyComponent: null,
  },
  // {
  //   id: 'randy',
  //   image: Randy,
  //   name: 'Randy, 41',
  //   text: 'Randy has a universally successful profile that crushes it in both Thailand and Australia. The crazy part is that all of his photos are built with AI.',
  //   title: '41 Year Old White Man in Bangkok',
  //   buttonText: 'Read Full Case Study',
  //   CaseStudyComponent: RandyCaseStudy,
  // },
  // {
  //   id: 'jacob',
  //   image: Jacob,
  //   name: 'Jacob, 23',
  //   text: 'Jacob used AI photos to shortcut his way to getting tons of matches.',
  //   title: '75+ Tinder Matches in 4 Days',
  //   buttonText: 'Read Full Case Study',
  //   CaseStudyComponent: JacobCaseStudy,
  // },
  // {
  //   id: 'travis',
  //   image: Travis,
  //   name: 'Travis, 29',
  //   text: "As someone who's had over 700 Bumble matches within a week, Travis is proof that you don't need to be a rockstar to have the dating life of a rockstar.",
  //   title: 'Travis gets 700+ Bumble likes within a few days',
  //   buttonText: 'Listen to Interview',
  //   CaseStudyComponent: TravisCaseStudy,
  // },
  // {
  //   id: 'gorge',
  //   image: Gorge,
  //   name: 'Gorge, 27',
  //   text: 'Gorge thought his game was subpar when it was really the way he presented himself. After making a few tweaks to his profile, he was getting tons of matches and had a calendar filled with dates.',
  //   title: 'Gorge goes from scarcity to abundance',
  //   buttonText: 'Listen to Interview',
  //   CaseStudyComponent: GorgeCaseStudy,
  // },
]

interface CaseStudyProps {
  id: string
}

export const CaseStudy = ({ id }: CaseStudyProps) => {
  const [open, setOpen] = useState(false)
  const data = CaseStudiesData.find(caseStudy => caseStudy.id === id)

  if (!data) return null

  const { image, name, text, title, buttonText, CaseStudyComponent } = data

  return (
    <div className="flex flex-col bg-gray-900 bg-opacity-50 z-10 border border-gray-800 items-center justify-between rounded-2xl h-full">
      <div className="w-full h-80 relative overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="flex flex-col p-7 gap-2.5 flex-grow">
        <p className="md:text-start md:mx-0">
          <strong>{name}</strong>
        </p>
        <p className="text-gray-400 md:text-start md:mx-0">
          {text}
        </p>
      </div>
      <div className="p-7 w-full flex justify-end">
        <Drawer open={open} onOpenChange={setOpen}>
          <Button
            disabled
            variant="secondary"
            className="lg:text-xs lg:py-3 lg:px-4"
            onClick={() => {
              //track(`open_case_study_${name}`)
              setOpen(!open)
            }}
          >
            {buttonText}
          </Button>
          <DrawerContent
            withBottomMargin
            className="flex flex-col rounded-t-[10px] h-[80%] fixed bottom-0 left-0 right-0 outline-none"
          >
            <div className="px-4 pb-4 rounded-t-[10px] flex-1 overflow-y-auto">
              <div className="max-w-md mx-auto space-y-4">
                <DrawerHeader>
                  <DrawerTitle>{title}</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-8">
                  {/* <CaseStudyComponent /> */}
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
