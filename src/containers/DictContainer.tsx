import React from 'react';
import { useDictStore } from '../hooks';
import DictService from '../components/service/DictService';

function DictContainer() {
  const store = useDictStore();

  return (
    <DictService
      contents={store.contents}
    />
  );
}

export default DictContainer;
