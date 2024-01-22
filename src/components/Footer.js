import React from 'react';

// import footer data
import { footer } from '../data';

const Footer = () => {
  //estrutura footer data
  const { logo, copyrightText } = footer;
  return (
    <footer>
      <div className='container mx-auto'>
        {/* logo */}
        <a href='#'>
          <img src={logo} alt=''/>
        </a>
        {/* texto footer */}
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
