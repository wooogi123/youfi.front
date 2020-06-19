import React from 'react';
import RecommendService from '../components/service/RecommendService';
import {
  useDepositStore,
  useSavingStore,
  useRentHouseStore,
  useCreditStore,
} from '../hooks';

function RecommendContainer() {
  const deposits = useDepositStore().contents;
  const savings = useSavingStore().contents;
  const rentHouses = useRentHouseStore();
  const credits = useCreditStore();
  return (
    <RecommendService
      deposits={deposits}
      savings={savings}
      rentHouses={rentHouses}
      credits={credits}
    />
  );
}

export default RecommendContainer;
