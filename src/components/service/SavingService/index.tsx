import React from 'react';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core';
import Template from '../Template';
import SavingCard from './SavingCard';
import { SearchProps } from '../../common';
import { SavingProduct, SavingOption } from '../../../store';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

interface SavingServiceProps extends SearchProps {
  products: SavingProduct[];
  options: SavingOption[];
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
        {products.map((product: SavingProduct) => (
          <SavingCard
            product={product}
            options={options
              .filter((option: SavingOption) =>
                (option.productCode === product.productCode))
              .sort((f, s) => {
                if (f.savingName === s.savingName) return f.saveTerm - s.saveTerm;
                if (f.savingName === '자유적립식') return -1;
                return 1;
              })}
          />
        ))}
      </div>
    </Template>
  );
}

export default SavingService;
