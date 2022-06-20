import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectExcercise } from '../../redux/actions/excerciseActions';
import { useSelector } from 'react-redux/es/exports';

const ExcerciseDetails = () => {
  const { id } = useParams();
  console.log('useParams', id);
  const currentExcer = useSelector(
    (state) => state.allExcercises.excercises[id]
  );
  console.log('currensasdkl;', currentExcer);

  const current = useSelector((state) => state.currentExcercise.current);
  console.log(current);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectExcercise(currentExcer));
  }, []);
  return (
    <div className='grid grid-cols-2 justify-center items-center h-screen gap-8 top-8'>
      <img src={current.gifUrl} className='h-f-t' />
      <h1>asjldk</h1>
    </div>
  );
};

export default ExcerciseDetails;
