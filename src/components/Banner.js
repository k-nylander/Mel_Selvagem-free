import React from 'react';

// import data
import { banner } from '../data';
 
const Banner = () => {
  // estrutura banner
  const { titlePart1, titlePart2, subtitle, textBtn, link} = banner;
  
  return (
    <section className='bg-neutral-500 h-[790px]'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          {/* text */}
          <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
            <h1 className='h1 text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
              {titlePart1} <br/> 
              <span className='text-primary-400'>{titlePart2}</span>
            </h1>
            <p className='max-w-[415px] text-body-md lg:text-body-lg mb-8' data-aos='fade-down' data-aos-delay='600'>{subtitle}</p>
            <a  href={link} className='btn btn-secondary btn-lg' data-aos='fade-down' data-aos-delay='700' role="button">
              {textBtn}
            </a>
          </div>
          {/* imagem */}
          <div 
            className='bg-blue-300 w-full h-full bg-banner br-cover br-right lg:bg-center bg-no-repeat flex-1'
            data-aos='fade-right' 
            data-aos-delay='900'
          >
            {/* imagem colheita */}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
