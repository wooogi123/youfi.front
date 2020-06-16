import React, { useState, ChangeEvent } from 'react';
import {
  useRentHouseStore,
  useCreditStore,
} from '../hooks';
import LoanService from '../components/service/LoanService';
import {
  RentHouseProduct,
  CreditProduct,
} from '../store';

function LoanContainer() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);
  const rentHouses = useRentHouseStore();
  const credits = useCreditStore();

  function onChangeSearch(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e !== undefined) setSearch(e.currentTarget.value);
  }

  function onChangeTab(_e: ChangeEvent<{}>, value: number) {
    setTab(value);
  }

  function onChangeIndex(value: number) {
    setTab(value);
  }

  return (
    <LoanService
      rentHouses={{
        products: rentHouses.products.filter((product: RentHouseProduct) =>
          (product.companyName.indexOf(search) !== -1)),
        options: rentHouses.options,
      }}
      credits={{
        products: credits.products.filter((product: CreditProduct) =>
          (product.companyName.indexOf(search) !== -1)),
        options: credits.options,
      }}
      isSearch
      search={search}
      onChangeSearch={onChangeSearch}
      tab={tab}
      onChangeTab={onChangeTab}
      onChangeIndex={onChangeIndex}
    />
  );
}

export default LoanContainer;
