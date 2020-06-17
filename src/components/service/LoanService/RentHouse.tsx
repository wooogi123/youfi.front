import React from 'react';
import RentHouseCard from './RentHouseCard';
import {
  RentHouseProduct,
  RentHouseOption,
} from '../../../store';

interface RentHouseProps {
  value: number;
  index: number;
  products: RentHouseProduct[];
  options: RentHouseOption[];
}

function RentHouse({
  value,
  index,
  products,
  options,
}: RentHouseProps) {
  return (
    <div hidden={value !== index}>
      {products.map((product: RentHouseProduct) => (
        <RentHouseCard
          product={product}
          options={options.filter((option: RentHouseOption) =>
            (option.productCode === product.productCode))
            .sort((f, s) =>
              (f.repaymentName.length - s.repaymentName.length))}
        />
      ))}
    </div>
  );
}

export default RentHouse;
