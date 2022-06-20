import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AttachmentIcon from '@mui/icons-material/Attachment';
import image from '../../assests/logo.png';

const ExcerciseItem = (props) => {
  return (
    <div className='flex flex-col justify-center  overflow-hidden h-fit bg-red-100 hover:border-[0.5px] hover:border-red-600 '>
      <img src={props.data.gifUrl} className='h-auto w-full align-center' />
      <div className='info flex justify-between my-8 mx-3'>
        <div className='headings'>
          <h5 className='text-red-600 text-sm'>{props.data.bodyPart}</h5>
          <p className='text-sm max-w-[200px] truncate overflow-hidden'>
            {props.data.name}
          </p>
        </div>
        <Button color='error' variant='contained' className='bg-red-600 mt-6'>
          <AttachmentIcon />
        </Button>
      </div>
    </div>
  );
};

export default ExcerciseItem;
