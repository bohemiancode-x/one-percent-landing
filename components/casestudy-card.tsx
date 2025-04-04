import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CaseStudyCardProps {
  imageSrc: string;
  name: string;
  age: number;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ imageSrc, name, age, description }) => {
  return (
    <div className="bg-gray-900 bg-opacity-50 z-10 h-full flex flex-col rounded-lg overflow-hidden border border-gray-800">
      <div className="h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{name}, {age}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className='w-full flex justify-end h-full'>
          <Button className="mt-auto text-white w-fit">Read Full Case Study</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;