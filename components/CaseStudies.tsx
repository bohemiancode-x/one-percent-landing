
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { CaseStudy } from './CaseStudy'

const CaseStudiesData = [
  {
    id: 'robert',
  },
  {
    id: 'george',
  },
  {
    id: 'nicholas',
  },
  // {
  //   id: 'randy',
  // },
  // {
  //   id: 'jacob',
  // },
  // {
  //   id: 'travis',
  // },
  // {
  //   id: 'gorge',
  // },
]

export const CaseStudies = () => {
  return (
    <div
      className=" px-0"
      id="case-studies"
    >
      {/* <h1 className="px-7">
        Plenty of <br /> Case Studies...
      </h1> */}
      <Carousel
        className="w-full lg:mx-auto xl:w-fit"
        opts={{ dragFree: true }}
      >
        <CarouselContent>
          {CaseStudiesData.map((caseStudy, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'basis-5/6 lg:select-none md:max-w-[350px]',
                index === 0 && 'ml-7 lg:ml-24',
                index === CaseStudiesData.length - 1 && 'mr-7 lg:mr-24',
              )}
            >
              <div className="p-1 h-full">
                <CaseStudy {...caseStudy} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
