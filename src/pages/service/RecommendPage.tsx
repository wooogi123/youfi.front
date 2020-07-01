import React, { useState } from 'react';
import {
  useDepositStore,
  useSavingStore,
  useRentHouseStore,
  useRecommendStore,
} from '../../hooks';
import {
  DepositResult,
  DepositProduct,
  SavingResult,
  SavingProduct,
  RentHouseResult,
  RentHouseProduct,
  RecommendContent,
} from '../../store';
import RecommendService from '../../components/service/RecommendService';
import RecommendResultService from '../../components/service/RecommendResultService';

interface Result {
  contents: DepositProduct[] | SavingProduct[] | RentHouseProduct[] | RecommendContent[];
  type: 'deposit' | 'saving' | 'rentHouse' | 'recommend' | '';
  money?: string;
  date?: number;
  recommend?: string;
  recommendType?: number;
}

function RecommendPage() {
  const [openResult, setOpenResult] = useState(false);
  const [result, setResult] = useState<Result>({
    contents: [],
    type: '',
  });
  const deposits: DepositResult = useDepositStore().contents;
  const savings: SavingResult = useSavingStore().contents;
  const rentHouses: RentHouseResult = useRentHouseStore();
  const recommends = useRecommendStore().contents;

  return (
    <>
      {openResult ? (
        <RecommendResultService
          result={result}
          deposits={deposits}
          savings={savings}
          rentHouses={rentHouses}
        />
      ) : (
        <RecommendService
          deposits={deposits}
          savings={savings}
          rentHouses={rentHouses}
          recommends={recommends}
          setResult={setResult}
          setOpenResult={setOpenResult}
        />
      )}
    </>
  );
}

export default RecommendPage;
