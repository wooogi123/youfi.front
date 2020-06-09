import React from 'react';
import { makeStyles } from '@material-ui/core';
import Template from './Template';
import { SearchProps, SavingCard } from '../common';
import { Base, Option } from '../../store/types/saving';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


interface SavingServiceProps extends SearchProps {
  products: Base[];
  options: Option[];
}

function SavingService({
  products,
  options,
  isSearch,
  search,
  onChangeSearch,
}: SavingServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'예금'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {products.map((product: Base) => (
          <SavingCard
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
            options={options.filter((option: Option) =>
              (option.financialProductCode === product.financialProductCode))}
            key={product.financialProductName}
          />
        ))}
      </div>
    </Template>
  );
}

export default SavingService;
