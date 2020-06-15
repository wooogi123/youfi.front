import axios from 'axios';
import {
  DepositProduct,
  DepositOption,
  DepositResult,
} from '../types';

export default async function fetchDeposit(): Promise<DepositResult> {
  const url = 'https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo';
  const products: DepositProduct[] = (await axios.get(`${url}?product=Deposit&choice=product`)).data.Item.data;
  const options: DepositOption[] = (await axios.get(`${url}?product=Deposit&choice=option`)).data.Item.data;
  return {
    products,
    options,
  };
}
