import React from 'react';

interface IconItemProps {
  imageSrc: string;
  name?: string 
  additionalClasses?: string;
}

const IconItem: React.FC<IconItemProps> = ({  imageSrc,name, additionalClasses = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${additionalClasses}`}>
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg`}>
        <img src={imageSrc} alt="icon" className="rounded-xl" /> {/* Adjust size as needed */}
      </div>
      <p>{name}</p>
    </div>
  );
};

export default IconItem;