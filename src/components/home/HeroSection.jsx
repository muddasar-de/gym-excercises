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

// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';

// import { useSelector, useDispatch } from 'react-redux';
// import { setExcercises } from '../../redux/actions/excerciseActions';

// import { fetchData, excerciseOptions } from '../../util/fetchData';

// import ExcerciseItem from './ExcerciseItem';

// const itemsPerPage = 12;

// const SearchSection = () => {
//   // const [excercises, setExcercises] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchedExcercises, setSearchedExcercises] = useState([]);
//   const [bodyParts, setBodyParts] = useState([]);

//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   const dispatch = useDispatch();
//   const excercises = useSelector((state) => state.allExcercises.excercises);

//   console.log('STORE', excercises);

//   useEffect(() => {
//     // fetchBodyParts();
//     // console.log(bodyParts);
//     fetchExcercises();
//   }, []);

//   useEffect(() => {
//     console.log('new');
//   }, []);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(searchedExcercises.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(searchedExcercises.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);
//   const fetchBodyParts = async () => {
//     const parts = await fetchData(
//       'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//       excerciseOptions
//     );

//     setBodyParts(parts);
//     console.log(parts);
//   };

//   const fetchExcercises = async () => {
//     const excerciseData = await fetchData(
//       'https://exercisedb.p.rapidapi.com/exercises',
//       excerciseOptions
//     );
//     dispatch(setExcercises(excerciseData));
//     setSearchedExcercises(excerciseData);
//     // setExcercises(excerciseData);
//     // console.log('API calls', excerciseData);
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchTerm !== '') {
//       const filteredExcercies = excercises.filter(
//         (excercise) =>
//           excercise.name.toLowerCase().includes(searchTerm) ||
//           excercise.target.toLowerCase().includes(searchTerm) ||
//           excercise.equipment.toLowerCase().includes(searchTerm) ||
//           excercise.bodyPart.toLowerCase().includes(searchTerm)
//       );
//       setSearchedExcercises(filteredExcercies);
//       console.log('filtered', filteredExcercies);
//     } else {
//       setSearchedExcercises(excercises);
//     }

//     setSearchTerm('');
//   };

//   const handlePageClick = (event) => {
//     const newOffset =
//       (event.selected * itemsPerPage) % searchedExcercises.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <section
//       id='search'
//       className=' flex flex-col items-center justify-center relative'>
//       <h1 className='text-4xl font-semibold mb-6 text-center'>
//         Awsome Excercises You <br />
//         Should Know
//       </h1>
//       <div className='flex gap-4 w-6/12'>
//         <TextField
//           id='outlined-basic'
//           value={searchTerm}
//           label='Search Excercises'
//           type='text'
//           variant='outlined'
//           className='w-full'
//           onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
//         />
//         <Button
//           color='error'
//           variant='contained'
//           className='bg-red-600 mt-6'
//           onClick={handleSearch}>
//           <SearchIcon />
//         </Button>
//       </div>

//       <div
//         id='#excercises'
//         className='grid w-full grid-cols-4 justify-items-center overflow-hidden  gap-8 my-8'>
//         {currentItems.map((excercise) => {
//           return (
//             <Link to={`/excercise/${excercise.id}`}>
//               <ExcerciseItem data={excercise} />
//             </Link>
//           );
//         })}
//         <ReactPaginate
//           breakLabel='...'
//           nextLabel='next >'
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel='< previous'
//           renderOnZeroPageCount={null}
//         />
//       </div>
//     </section>
//   );
// };

// export default SearchSection;
