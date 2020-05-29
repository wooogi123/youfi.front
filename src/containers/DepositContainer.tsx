import React from 'react';
import { useDepositStore } from '../hooks';
import DepositService from '../components/service/DepositService';

function DepositContainer() {
  const store = useDepositStore();

  return (
    <DepositService
      contents={store.contents.results}
      isSearch={false}
    />
  );
}

export default DepositContainer;
