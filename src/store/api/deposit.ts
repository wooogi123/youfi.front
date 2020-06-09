import axios, { AxiosResponse } from 'axios';
import { DepositResponse } from '../types/deposit';

export default async function FetchDeposit(): Promise<DepositResponse> {
  const url = 'http://localhost:3000/dev/FetchDeposits';
  const resp: AxiosResponse = await axios.get(url);
  const deposits: DepositResponse = resp.data;
  return deposits;
}
