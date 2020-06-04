import React from 'react';
import { makeStyles } from '@material-ui/core';
import Template from './Template';
import { SearchProps, DepositCard } from '../common';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface Response {
  [key: string]: string;
}


interface DepositServiceProps extends SearchProps {
  products: Response[];
  options: Response[];
}

function DepositService({
  products,
  options,
  isSearch,
  search,
  onChangeSearch,
}: DepositServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'예금'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {products.map((product: Response) => (
          <DepositCard
            bankName={product.financialCompanyName}
            title={product.financialProductName}
            joinWay={product.joinWay}
            joinMember={product.joinMember}
            maturityAfterInterest={product.maturityAfterInterest}
            special={product.specialCondition}
            comment={product.comment}
            maxLimit={product.maxLimit}
            startDate={product.disclosureStartDay}
            endDate={product.disclosureEndDay}
            options={options.filter((option: Response) =>
              (option.financialProductCode === product.financialProductCode))}
            key={product.financialProductName}
          />
        ))}
      </div>
    </Template>
  );
}

export default DepositService;
