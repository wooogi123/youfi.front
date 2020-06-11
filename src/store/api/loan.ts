import axios, { AxiosResponse } from 'axios';
import {
  RentHouseResponse,
  CreditResponse,
  AllLoanResponse,
} from '../types';


async function fetchRentHouseLoan(): Promise<RentHouseResponse> {
  const url = 'http://localhost:3000/dev/FetchRentHouses';
  const resp: AxiosResponse = await axios.get(url);
  const ret: RentHouseResponse = resp.data;
  return ret;
}

async function fetchCreditLoan(): Promise<CreditResponse> {
  const url = 'http://localhost:3000/dev/FetchCreditLoans';
  const resp: AxiosResponse = await axios.get(url);
  const ret: CreditResponse = resp.data;
  return ret;
}

export default async function fetchLoan(): Promise<AllLoanResponse> {
  const rentHouses: RentHouseResponse = await fetchRentHouseLoan();
  const credits: CreditResponse = await fetchCreditLoan();
  return {
    rentHouses,
    credits,
  };
}
