import React from 'react';

// import data 
import { faq } from '../data';

// import components
import Accordion from '../components/Accordion';

const Faq = () => {
  // destrucuture faq data
  const { icon, title, accordions } = faq;
  return (
    <section>Faq</section>
  );
};

export default Faq;
