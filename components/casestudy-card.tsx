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
    <div className="bg-gray-900 bg-opacity-50 z-10 rounded-lg overflow-hidden border border-gray-800">
      <div className="h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}, {age}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <Button className="w-full text-white">Read Full Case Study</Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;