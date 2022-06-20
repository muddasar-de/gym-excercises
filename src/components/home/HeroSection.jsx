import React from 'react';
import Banner from '../../assests/banner.jpg';
import Button from '@mui/material/Button';
const HeroSection = () => {
  return (
    <section className='container grid grid-cols-2 h-screen overflow-hidden  	'>
      <div className='info flex flex-col justify-center items-start '>
        <h3 className='text-3xl font-bold text-red-600'>Fitness Club</h3>
        <h1 className='text-7xl font-bold'>{`Sweat, Smile & Repeat`}</h1>
        <small className='text-xl my-6'>
          {' '}
          Checkout your required excercies and apply...
        </small>
        <Button color='error' variant='contained' className='bg-red-600 mt-6'>
          Let's Talk
        </Button>
        <div className='absolute bottom-12'>
          <h1 className='text-9xl font-extrabold text-red-100 opacity-50  '>
            Excercises
          </h1>
        </div>
      </div>

      <img
        src={Banner}
        className='right-0 h-[39rem]  object-cover h-auto  top-0 rounded-br-[4rem] rounded-tl-[4rem] z-10  '
      />
    </section>
  );
};

export default HeroSection;
