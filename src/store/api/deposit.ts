import axios from 'axios';
import {
  DepositProduct,
  DepositOption,
  DepositResult,
} from '../types';

export default async function fetchDeposit(): Promise<DepositResult> {
  const uri: URL = new URL('https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo');
  uri.searchParams.set('product', 'Deposit');
  uri.searchParams.set('choice', 'product');
  const products: DepositProduct[] = (await axios.get(uri.toString())).data.Item.data;
  uri.searchParams.set('choice', 'option');
  const options: DepositOption[] = (await axios.get(uri.toString())).data.Item.data;
  return {
    products,
    options,
  };
}
