import axios from 'axios';
import {
  SavingProduct,
  SavingOption,
  SavingResult,
} from '../types';

export default async function fetchSaving(): Promise<SavingResult> {
  const uri: URL = new URL('https://g0ya91ux8d.execute-api.ap-northeast-2.amazonaws.com/default/GetDataByDynamo');
  uri.searchParams.set('product', 'Saving');
  uri.searchParams.set('choice', 'product');
  const products: SavingProduct[] = (await axios.get(uri.toString())).data.Item.data;
  uri.searchParams.set('choice', 'option');
  const options: SavingOption[] = (await axios.get(uri.toString())).data.Item.data;
  return {
    products,
    options,
  };
}
