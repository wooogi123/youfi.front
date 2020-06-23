import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { RecommendContent, RecommendState } from '../types';
import {
  RECOMMEND_ASYNC_REQUEST,
  RECOMMEND_ASYNC_SUCCESS,
  RECOMMEND_ASYNC_FAILURE,
  RecommendAction,
} from '../actions';

const initContent: RecommendContent = {
  productType: '',
  region: '',
  productName: '',
  joinWay: '',
  special: '',
  comment: '',
};

const initState: RecommendState = {
  contents: [initContent],
  isError: false,
};

export default createReducer<RecommendState, RecommendAction>(initState, {
  [RECOMMEND_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isError = false;
    }),
  [RECOMMEND_ASYNC_SUCCESS]: (state, action: RecommendAction) =>
    produce(state, (draft) => {
      draft.isError = false;
      draft.contents = action.payload as RecommendContent[];
    }),
  [RECOMMEND_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isError = true;
      draft.contents = [initContent];
    }),
});
