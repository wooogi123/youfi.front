import React, { useState } from 'react';
import { useSavingStore } from '../../hooks';
import SavingService from '../../components/service/SavingService';

function SavingPage() {
  const [search, setSearch] = useState('');
  const store = useSavingStore();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e !== undefined) setSearch(e.currentTarget.value);
  }

  return (
    <SavingService
      products={store.contents.products.filter((el) =>
        (el.companyName.indexOf(search) !== -1))}
      options={store.contents.options}
      isSearch
      search={search}
      onChangeSearch={onChange}
    />
  );
}

export default SavingPage;
