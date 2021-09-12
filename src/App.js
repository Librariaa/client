import React from 'react';
import Header from './Header/Header';
import UpperCarousel from './Body/Upper Carousel/CarouselComp';
import LowerCarousel from './Body/Lower Carousel/Slide';
import Search from './Header/Search/Search';

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <UpperCarousel />
      <LowerCarousel />
    </>
  )
}

export default App

