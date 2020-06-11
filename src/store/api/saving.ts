import axios, { AxiosResponse } from 'axios';
import { SavingResponse } from '../types';

export default async function fetchSaving(): Promise<SavingResponse> {
  const url = 'http://localhost:3000/dev/FetchSavings';
  const resp: AxiosResponse = await axios.get(url);
  const savings: SavingResponse = resp.data;
  return savings;
}
