import React from 'react';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core';
import Template from '../Template';
import {
  DepositResult,
  DepositProduct,
  SavingResult,
  SavingProduct,
  RentHouseResult,
  RecommendContent,
  RentHouseProduct,
} from '../../../store';
import DepositCard from './DepositCard';
import SavingCard from './SavingCard';
import LoanCard from './LoanCard';
import SpecialDepositCard from './SpecialDepositCard';
import SpecialLoanCard from './SpecialLoanCard';
import SpecialOtherCard from './SpecialOtherCard';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

interface Result {
  contents: DepositProduct[] | SavingProduct[] | RentHouseProduct[] | RecommendContent[];
  type: 'deposit' | 'saving' | 'rentHouse' | 'recommend' | '';
  money?: string;
  date?: number;
  recommend?: string;
  recommendType?: number;
}

interface ResultProps {
  result: Result;
  deposits: DepositResult;
  savings: SavingResult;
  rentHouses: RentHouseResult;
}

function RecommendResultService({
  result,
  deposits,
  savings,
  rentHouses,
}: ResultProps) {
  const classes = useStyles();

  return (
    <Template
      title={'맞춤 금융상품'}
      isSearch={false}
    >
      <div className={classes.root}>
        {result.type === 'deposit' && (
          <>
            {(result.contents as DepositProduct[]).map((product) => (
              <DepositCard
                product={product}
                deposits={deposits}
                money={result.money as string}
                date={result.date as number}
                key={product.productCode}
              />
            ))}
          </>
        )}
        {result.type === 'saving' && (
          <>
            {(result.contents as SavingProduct[]).map((product) => (
              <SavingCard
                product={product}
                savings={savings}
                money={result.money as string}
                date={result.date as number}
                key={product.productCode}
              />
            ))}
          </>
        )}
        {result.type === 'rentHouse' && (
          <>
            {(result.contents as RentHouseProduct[]).map((product) => (
              <LoanCard
                product={product}
                rentHouses={rentHouses}
                money={result.money as string}
                date={result.date as number}
                key={product.productCode + product.companyCode}
              />
            ))}
          </>
        )}
        {result.recommend === 'deposit' && (
          <>
            {(result.contents as RecommendContent[]).filter((product) =>
              (product.productType === '저축' || product.productType === '주택청약'))
              .map((product) => (
                <SpecialDepositCard
                  product={product}
                  key={product.productName}
                />
              ))}
          </>
        )}
        {result.recommend === 'loan' && (
          <>
            {(result.contents as RecommendContent[]).filter((product) =>
              (product.productType === '청년 전월세 보증금 대출' || product.productType === '청년 생활비 대출'))
              .filter((product) => {
                if (result.recommendType === 1) return true;
                if (result.recommendType === 2) return product.productType === '청년 전월세 보증금 대출';
                return product.productType === '청년 생활비 대출';
              })
              .map((product) => (
                <SpecialLoanCard
                  product={product}
                  key={product.productName}
                />
              ))}
          </>
        )}
        {result.recommend === 'other' && (
          <>
            {(result.contents as RecommendContent[]).filter((product) =>
              (product.productType === '청년 지원 사업' || product.productType === '장학금 지원 사업'))
              .filter((product) => {
                if (result.recommendType === 1) return true;
                if (result.recommendType === 2) return product.productType === '청년 지원 사업';
                return product.productType === '장학금 지원 사업';
              })
              .map((product) => (
                <SpecialOtherCard
                  product={product}
                  key={product.productName}
                />
              ))}
          </>
        )}
      </div>
    </Template>
  );
}

export default RecommendResultService;
