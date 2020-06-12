import axios, { AxiosResponse } from 'axios';
import { DictionaryContent } from '../types';

export default async function fetchDictionary(
  url: string,
): Promise<DictionaryContent[]> {
  const resp: AxiosResponse = await axios.get(url);
  const dictionary: DictionaryContent[] = resp.data;
  return dictionary.map((dict: DictionaryContent) => ({
    category: dict.category,
    title: dict.title,
    keywords: dict.keywords,
    summary: dict.summary,
    detail: dict.detail,
  }));
}
