import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({accordion}) => {
  //accordion state
  const [ isOpen, setIsOpen ] = useState(true);
  //destructure accordion
  const { question, answer } = accordion;

  return (
    <div className='cursor-pointer'>
      <div className='bg-white border rounded-sm'>
        <div className='min-h-[60px] flex items-center justify-between px-[30px]'>
          <h6 className='h6'>{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className='text-[20px] text-neutral-500' />
            ):(
              <FaChevronCircleDown className='text-[20px] text-neutral-500' />
            )}
          </div>
        </div>
        {/* descrição */}
        <div className={`bg-pink-200 ${
            isOpen ? 'min-h-[200px] lg:min-h-[160px]' :
            'min-0'
          } max-h-0 overflow-hidden flex`}
        >
          <div className='mt-6'>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
