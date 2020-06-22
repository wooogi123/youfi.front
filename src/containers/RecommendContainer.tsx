import React from 'react';
import RecommendService from '../components/service/RecommendService';
import {
  useDepositStore,
  useSavingStore,
  useRentHouseStore,
} from '../hooks';

function RecommendContainer() {
  const deposits = useDepositStore().contents;
  const savings = useSavingStore().contents;
  const rentHouses = useRentHouseStore();
  return (
    <RecommendService
      deposits={deposits}
      savings={savings}
      rentHouses={rentHouses}
    />
  );
}

export default RecommendContainer;
