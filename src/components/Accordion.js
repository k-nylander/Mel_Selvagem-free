import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({accordion}) => {
  //accordion state
  const [ isOpen, setIsOpen ] = useState(false);
  //destructure accordion
  const { question, answer } = accordion;

  return (
    <div>
      Accordion
    </div>);
};

export default Accordion;
