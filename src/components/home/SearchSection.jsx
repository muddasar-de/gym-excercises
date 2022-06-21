import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { useSelector, useDispatch } from 'react-redux';
import { setExcercises } from '../../redux/actions/excerciseActions';

import { fetchData, excerciseOptions } from '../../util/fetchData';

import ExcerciseItem from './ExcerciseItem';

const SearchSection = () => {
  // const [excercises, setExcercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedExcercises, setSearchedExcercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [visible, setVisible] = useState(12);

  const dispatch = useDispatch();
  const excercises = useSelector((state) => state.allExcercises.excercises);

  console.log('STORE', excercises);

  useEffect(() => {
    // fetchBodyParts();
    // console.log(bodyParts);
    fetchExcercises();
  }, []);

  useEffect(() => {
    console.log('new');
  }, []);

  const fetchBodyParts = async () => {
    const parts = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      excerciseOptions
    );

    setBodyParts(parts);
    console.log(parts);
  };

  const fetchExcercises = async () => {
    const excerciseData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      excerciseOptions
    );
    dispatch(setExcercises(excerciseData));
    setSearchedExcercises(excerciseData);
    // setExcercises(excerciseData);
    // console.log('API calls', excerciseData);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      const filteredExcercies = excercises.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(searchTerm) ||
          excercise.target.toLowerCase().includes(searchTerm) ||
          excercise.equipment.toLowerCase().includes(searchTerm) ||
          excercise.bodyPart.toLowerCase().includes(searchTerm)
      );
      setSearchedExcercises(filteredExcercies);
      console.log('filtered', filteredExcercies);
    } else {
      setSearchedExcercises(excercises);
    }

    setSearchTerm('');
  };

  const setVisiblity = (e) => {
    e.preventDefault();
    setVisible((prev) => prev + 4);
  };

  return (
    <section
      id='search'
      className=' flex flex-col items-center justify-center relative mb-12'>
      <h1 className='text-4xl font-semibold mb-6 text-center'>
        Awsome Excercises You <br />
        Should Know
      </h1>
      <div className='flex gap-4 w-6/12'>
        <TextField
          id='outlined-basic'
          value={searchTerm}
          label='Search Excercises'
          type='text'
          variant='outlined'
          className='w-full'
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <Button
          color='error'
          variant='contained'
          className='bg-red-600 mt-6'
          onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </div>

      <div
        id='#excercises'
        className='grid w-full grid-cols-4 justify-items-center overflow-hidden  gap-8 my-12'>
        {searchedExcercises.slice(0, visible).map((excercise) => {
          return (
            <Link to={`/excercise/${excercise.id}`}>
              <ExcerciseItem data={excercise} />
            </Link>
          );
        })}
      </div>
      <Button
        color='error'
        variant='contained'
        className='bg-red-600 mb-12'
        onClick={setVisiblity}>
        Show more
      </Button>
    </section>
  );
};

export default SearchSection;
