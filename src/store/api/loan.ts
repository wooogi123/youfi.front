import axios from 'axios';
import {
  RentHouseProduct,
  RentHouseOption,
  RentHouseResult,
  CreditProduct,
  CreditOption,
  CreditResult,
  LoanResult,
} from '../types';

async function fetchRentHouseLoan(): Promise<RentHouseResult> {
  const uri: URL = new URL('https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo');
  uri.searchParams.set('product', 'RentHouse');
  uri.searchParams.set('choice', 'product');
  const products: RentHouseProduct[] = (await axios.get(uri.toString())).data.Item.data;
  uri.searchParams.set('choice', 'option');
  const options: RentHouseOption[] = (await axios.get(uri.toString())).data.Item.data;
  return {
    products,
    options,
  };
}

async function fetchCreditLoan(): Promise<CreditResult> {
  const uri: URL = new URL('https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo');
  uri.searchParams.set('product', 'Credit');
  uri.searchParams.set('choice', 'product');
  const products: CreditProduct[] = (await axios.get(uri.toString())).data.Item.data;
  uri.searchParams.set('choice', 'option');
  const options: CreditOption[] = (await axios.get(uri.toString())).data.Item.data;
  return {
    products,
    options,
  };
}

export default async function fetchLoan(): Promise<LoanResult> {
  const rentHouses: RentHouseResult = await fetchRentHouseLoan();
  const credits: CreditResult = await fetchCreditLoan();
  return {
    rentHouses,
    credits,
  };
}
