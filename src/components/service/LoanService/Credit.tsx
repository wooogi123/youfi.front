import React from 'react';
import CreditCard from './CreditCard';
import {
  CreditProduct,
  CreditOption,
} from '../../../store';

interface CreditProps {
  value: number;
  index: number;
  products: CreditProduct[];
  options: CreditOption[];
}

function Credit({
  value,
  index,
  products,
  options,
}: CreditProps) {
  return (
    <div hidden={value !== index}>
      {products.map((product: CreditProduct) => (
        <CreditCard
          product={product}
          options={options.filter((option: CreditOption) =>
            (option.creditProductType === product.creditProductType))
            .filter((option: CreditOption) =>
              (option.companyCode === product.companyCode))
            .sort((f, s) =>
              (f.creditLendName.length - s.creditLendName.length))}
          key={product.productCode + product.companyCode + product.creditProductType}
        />
      ))}
    </div>
  );
}

export default Credit;
