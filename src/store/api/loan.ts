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
  const uri: string = 'https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo';

  const products: RentHouseProduct[] = (await axios.get(`${uri}?product=RentHouse&choice=product`)).data.Item.data;
  const options: RentHouseOption[] = (await axios.get(`${uri}?product=RentHouse&choice=product`)).data.Item.data;
  return {
    products,
    options,
  };
}

async function fetchCreditLoan(): Promise<CreditResult> {
  const uri: string = 'https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo';
  const products: CreditProduct[] = (await axios.get(`${uri}?product=Credit&choice=product`)).data.Item.data;
  const options: CreditOption[] = (await axios.get(`${uri}?product=Credit&choice=product`)).data.Item.data;
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
