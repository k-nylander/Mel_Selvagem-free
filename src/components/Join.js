import React from 'react';

// import data
import { join } from '../data';

const Join = () => {
  // destructure join data
  const { image, title, subtitle, btnText } = join;
  return (
    <section className='bg-neutral-500 min-h-[537px]'>
      <div className='container mx-auto'>
        {/* image & text wrapper  */}
        <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:space-y-0'>
          {/* image */}
          <div className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full'>
            <img src={image} alt='' />
          </div>
          {/* text */}
          <div className='max-w-[350px]'>
            <h2 className='h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white'>
              {title}
            </h2>
            <p className='text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px]'>
              {subtitle}
            </p>
            <button>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
