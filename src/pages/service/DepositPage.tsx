import React, { useState } from 'react';
import { useDepositStore } from '../../hooks';
import DepositService from '../../components/service/DepositService';

function DepositPage() {
  const [search, setSearch] = useState('');
  const store = useDepositStore();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setSearch(e!.currentTarget.value);
  }

  return (
    <DepositService
      products={store.contents.products.filter((el) =>
        (el.companyName.indexOf(search) !== -1))}
      options={store.contents.options}
      isSearch
      search={search}
      onChangeSearch={onChange}
    />
  );
}

export default DepositPage;
