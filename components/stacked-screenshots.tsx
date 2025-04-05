import React from 'react';
import Image from 'next/image';

const StackedScreenshots = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Mobile layout (stacked) */}
      <div className="md:hidden relative w-full max-w-sm mx-auto pb-4">
        {/* Third screenshot (bottom) */}
        <div className="relative z-10 mx-auto">
          <Image 
            src="/images/iphone-1.png" 
            alt="iPhone screenshot of dating app" 
            width={0}
            height={512}
            className="w-full h-auto"
          />
        </div>
        
        {/* Second screenshot (middle) */}
        <div className="relative z-20 mx-auto -mt-[20rem]">
          <Image 
            src="/images/iphone-2.png" 
            alt="iPhone screenshot of dating app" 
            width={0}
            height={512}
            className="w-full h-auto"
          />
        </div>
        
        {/* First screenshot (top) */}
        <div className="relative z-30 mx-auto -mt-[20rem]">
          <Image 
            src="/images/iphone-3.png" 
            alt="iPhone screenshot of dating app" 
            width={0}
            height={512}
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Desktop layout (flexed) */}
      <div className="hidden md:flex justify-center items-center gap-6 py-12">
        <div className="w-64">
          <Image 
            src="/images/iphone-1.png" 
            alt="iPhone screenshot of dating app" 
            width={256}
            height={512}
            className="w-full"
          />
        </div>
        
        <div className="w-64 scale-[1.12]">
          <Image 
            src="/images/iphone-2.png" 
            alt="iPhone screenshot of dating app" 
            width={256}
            height={512}
            className="w-full"
          />
        </div>
        
        <div className="w-64">
          <Image 
            src="/images/iphone-3.png" 
            alt="iPhone screenshot of dating app" 
            width={256}
            height={512}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StackedScreenshots;