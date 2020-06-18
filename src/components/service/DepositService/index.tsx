import React from 'react';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core';
import Template from '../Template';
import DepositCard from './DepositCard';
import { SearchProps } from '../../common';
import { DepositProduct, DepositOption } from '../../../store';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

interface DepositServiceProps extends SearchProps {
  products: DepositProduct[];
  options: DepositOption[];
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
        {products.map((product: DepositProduct) => (
          <DepositCard
            product={product}
            options={options.filter((option: DepositOption) =>
              (option.productCode === product.productCode))
              .sort((f, s) => (f.saveTerm - s.saveTerm))}
            key={product.productCode}
          />
        ))}
      </div>
    </Template>
  );
}

export default DepositService;
