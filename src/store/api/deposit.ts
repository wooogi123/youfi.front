import axios, { AxiosResponse } from 'axios';
import { DepositRequest, DepositResponse } from '../types/deposit';

export default async function FetchDeposit({
  topFinGrpNo, pageNo,
}: DepositRequest): Promise<DepositResponse> {
  const url = 'http://localhost:3000/dev/DepositProducts';
  const resp: AxiosResponse = await axios.post(url, {
    topFinGrpNo,
    pageNo,
  });
  const deposits: DepositResponse = resp.data;
  return deposits;
}
