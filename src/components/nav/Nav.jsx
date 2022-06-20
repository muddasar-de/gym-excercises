import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo.png';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

const Nav = () => {
  return (
    <Stack
      position='absolute'
      direction='row'
      justifyContent='start'
      alignItems='center'
      height='5rem'
      divider={<Divider orientation='verticle' flexItem />}
      gap='3rem'>
      <Link
        to='/'
        className='flex gap-4 justify-center items-center transition ease-in delay-150'>
        <img src={Logo} className='w-10' />
        <h3 className='text-2xl font-bold text-red-600'>Fitness Club</h3>
      </Link>
      <Stack direction='row' gap='3rem'>
        <Link
          to='/'
          className='hover:text-slate-800 hover:border-b-2 transition ease-in delay-150'>
          Home
        </Link>
        <a
          href='#search'
          className='hover:text-slate-800 hover:border-b-2 transition ease-in delay-150'>
          Excercies
        </a>
      </Stack>
    </Stack>
  );
};

export default Nav;
