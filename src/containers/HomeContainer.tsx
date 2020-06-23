import React, { useState } from 'react';
import HomeService from '../components/service/HomeService';

function HomeContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);

  return (
    <HomeService
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
      pause={pause}
      setPause={setPause}
    />
  );
}

export default HomeContainer;
