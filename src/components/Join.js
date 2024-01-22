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
          <div>
            <h2>
              {title}
            </h2>
            <p>{subtitle}</p>
            <button>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
