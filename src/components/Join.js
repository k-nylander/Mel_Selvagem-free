import React from 'react';

// import data
import { join } from '../data';

const Join = () => {
  // destructure join data
  const { image, title, subtitle, btnText } = join;
  return (
    <section>
      <div className='container mx-auto'>
        {/* image & text wrapper  */}
        <div>
          {/* image */}
          <div>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
