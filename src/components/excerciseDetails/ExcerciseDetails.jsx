import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  selectExcercise,
  removeSelectedExcercise,
} from '../../redux/actions/excerciseActions';
import { useSelector } from 'react-redux/es/exports';
import { fetchData, excerciseOptions } from '../../util/fetchData';

const ExcerciseDetails = () => {
  const { id } = useParams();
  console.log('useParams', id);

  const dispatch = useDispatch();
  const currentExercise = useSelector(
    (state) => state.currentExcercise.current
  );
  console.log(currentExercise);
  useEffect(() => {
    const fetchCurrentData = async () => {
      console.log('asdas');
      // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const currentData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        excerciseOptions
      );
      // console.log('CurrentDAta', currentData);
      dispatch(selectExcercise(currentData));
    };
    fetchCurrentData();
    return removeSelectedExcercise();
  }, []);

  return (
    <div className='grid grid-cols-2 justify-center items-center h-screen gap-8 top-8'>
      <div className='  border-2'>
        <img
          src={currentExercise.gifUrl}
          className='h-96 w-[40rem] object-center align-center 	 object-cover'
        />
      </div>
      <div className='text-4xl text-start '>
        <h1>{currentExercise.name}</h1>
        <h1>{currentExercise.target}</h1>
        <h1>{currentExercise.equipment}</h1>
        <h1>{currentExercise.bodyPart}</h1>
      </div>
    </div>
  );
};

export default ExcerciseDetails;
