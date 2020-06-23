import React from 'react';
import RentHouseCard from './RentHouseCard';
import {
  RentHouseProduct,
  RentHouseOption,
} from '../../../store';

interface RentHouseProps {
  className?: string;
  products: RentHouseProduct[];
  options: RentHouseOption[];
}

function RentHouse({
  className,
  products,
  options,
}: RentHouseProps) {
  return (
    <div className={className}>
      {products.map((product: RentHouseProduct) => (
        <RentHouseCard
          product={product}
          options={options.filter((option: RentHouseOption) =>
            (option.productCode === product.productCode))
            .sort((f, s) =>
              (f.repaymentName.length - s.repaymentName.length))}
          key={product.productCode + product.companyCode}
        />
      ))}
    </div>
  );
}

export default RentHouse;
