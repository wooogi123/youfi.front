import React, { useState } from 'react';
import { useDepositStore } from '../hooks';
import DepositService from '../components/service/DepositService';

function DepositContainer() {
  const [search, setSearch] = useState('');
  const store = useDepositStore();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e !== undefined) setSearch(e.currentTarget.value);
  }

  return (
    <DepositService
      contents={store.contents.results.filter((el) => (el.base.kor_co_nm.indexOf(search) !== -1))}
      isSearch
      search={search}
      onChangeSearch={onChange}
    />
  );
}

export default DepositContainer;
