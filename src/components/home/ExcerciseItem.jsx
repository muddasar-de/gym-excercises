import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import image from '../../assests/logo.png';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const ExcerciseItem = (props) => {
  // let navigate = useNavigate();
  // console.log(navigate);
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
      className='flex flex-col justify-center  overflow-hidden h-fit bg-red-100 hover:drop-shadow-md border-[0.5px] hover:border-[0.5px] hover:border-red-600 '>
      <img src={props.data.gifUrl} className='h-auto w-full align-center' />
      <div className='info flex justify-between my-8 mx-3'>
        <div className='headings'>
          <h5 className='text-red-600 text-sm'>{props.data.bodyPart}</h5>
          <p className='text-md max-w-[200px] truncate overflow-hidden'>
            {props.data.name}
          </p>
        </div>
        <Button color='error' variant='contained' className='bg-red-600 mt-6'>
          <CenterFocusStrongIcon />
        </Button>
      </div>
    </motion.div>
  );
};

export default ExcerciseItem;
