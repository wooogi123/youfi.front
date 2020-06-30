import React, { useState } from 'react';
import { useDictStore } from '../../hooks';
import DictService from '../../components/service/DictService';

function DictPage() {
  const [search, setSearch] = useState('');
  const store = useDictStore();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e !== undefined) setSearch(e.currentTarget.value);
  }

  return (
    <DictService
      contents={store.contents.filter((el) => (el.detail.indexOf(search) !== -1))}
      isSearch
      search={search}
      onChangeSearch={onChange}
    />
  );
}

export default DictPage;
