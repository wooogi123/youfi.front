import axios, { AxiosResponse } from 'axios';
import { RecommendContent } from '../types';

export default async function fetchRecommend(
  url: string,
): Promise<RecommendContent[]> {
  const resp: AxiosResponse = await axios.get(url);
  const recommend: RecommendContent[] = resp.data;
  return recommend;
}
