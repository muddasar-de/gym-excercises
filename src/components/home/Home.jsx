import React from 'react';
import HeroSection from './HeroSection';
import SearchSection from './SearchSection';

const Home = () => {
  return (
    <main className='flex flex-col h-auto transition ease-in delay-150'>
      <HeroSection />
      <SearchSection />
    </main>
  );
};
export default Home;
