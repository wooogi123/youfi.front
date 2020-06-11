import React, { useState, ChangeEvent } from 'react';
import {
  useRentHouseLoanStore,
  useCreditLoanStore,
} from '../hooks';
import LoanService from '../components/service/LoanService';
import {
  RentHouseLoanProduct,
  CreditLoanProduct,
} from '../store';

function LoanContainer() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);
  const rentHouses = useRentHouseLoanStore();
  const credits = useCreditLoanStore();

  function onChangeSearch(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e !== undefined) setSearch(e.currentTarget.value);
  }

  function onChangeTab(e: ChangeEvent<{}>, value: number) {
    setTab(value);
  }

  function onChangeIndex(value: number) {
    setTab(value);
  }

  return (
    <LoanService
      rentHouses={{
        status: rentHouses.status,
        products: rentHouses.products.filter((product: RentHouseLoanProduct) =>
          (product.financialCompanyName.indexOf(search) !== -1)),
        options: rentHouses.options,
      }}
      credits={{
        status: credits.status,
        products: credits.products.filter((product: CreditLoanProduct) =>
          (product.financialCompanyName.indexOf(search) !== -1)),
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
