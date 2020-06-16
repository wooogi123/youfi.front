import axios from 'axios';
import {
  SavingProduct,
  SavingOption,
  SavingResult,
} from '../types';

export default async function fetchSaving(): Promise<SavingResult> {
  const uri = 'https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo';
  const products: SavingProduct[] = (await axios.get(`${uri}?product=Saving&choice=product`)).data.Item.data;
  const options: SavingOption[] = (await axios.get(`${uri}?product=Saving&choice=option`)).data.Item.data;
  return {
    products,
    options,
  };
}
