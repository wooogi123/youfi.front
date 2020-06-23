import { createAsyncAction, ActionType } from 'typesafe-actions';
import { RecommendContent } from '../types';

const prefix: string = 'recommend';

export const RECOMMEND_ASYNC_REQUEST = `${prefix}/RECOMMEND_ASYNC_REQUEST`;
export const RECOMMEND_ASYNC_SUCCESS = `${prefix}/RECOMMEND_ASYNC_SUCCESS`;
export const RECOMMEND_ASYNC_FAILURE = `${prefix}/RECOMMEND_ASYNC_FAILURE`;

export const recommendAction = createAsyncAction(
  RECOMMEND_ASYNC_REQUEST,
  RECOMMEND_ASYNC_SUCCESS,
  RECOMMEND_ASYNC_FAILURE,
)<string, RecommendContent[], Error>();

export type RecommendAction = ActionType<typeof recommendAction>;
