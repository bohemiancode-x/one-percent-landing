import React from 'react';
import CaseStudyCard from './casestudy-card';
import Slider from 'react-slick';
import BackgroundGradient from './background-gradient';

const CaseStudies = () => {
  const caseStudies = [
    {
      imageSrc: "/images/robert.png",
      name: "Robert",
      age: 61,
      description: "Getting out of two divorces, Robert didn't let his age stop him and was able to go on dates with women 30-40 years old by dialing in his photos, bio and messaging."
    },
    {
      imageSrc: "/images/george.png",
      name: "George",
      age: 21,
      description: "George just finished college and wanted to finally get his dating life handled. In just 4 weeks, he revamped his profile and finally found a girlfriend to be exclusive with."
    },
    {
      imageSrc: "/images/nicholas.png",
      name: "Nicholas",
      age: 43,
      description: "Recently getting back into dating after a divorce, Nicholas didn't even have a profile ready when he joined the community. But within 4 weeks, he was already going on 2-3 dates every week."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust based on your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // For larger screens
        settings: "unslick", // This will disable the carousel
      },
    ],
  };

  return (
    <>
        <BackgroundGradient gradient="7" className="z-0" />
        <div className=" max-w-5xl mx-auto">
        <div className="hidden md:grid-cols-3 gap-8 md:grid">
            {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
            ))}
        </div>
        <div className="md:hidden">
            <Slider arrows={false} {...settings}>
            {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
            ))}
            </Slider>
        </div>
        </div>
    </>
  );
};

export default CaseStudies;