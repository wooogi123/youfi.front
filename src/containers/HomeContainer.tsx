import React, { useState } from 'react';
import HomeService from '../components/service/HomeService';

function HomeContainer() {
  const [index, setIndex] = useState(0);

  function onChangeIndex(value: number) {
    setIndex(value);
  }

  function onChangePage(_event: object, page: number) {
    setIndex(page - 1);
  }

  return (
    <HomeService
      index={index}
      onChangeIndex={onChangeIndex}
      onChangePage={onChangePage}
    />
  );
}

export default HomeContainer;
