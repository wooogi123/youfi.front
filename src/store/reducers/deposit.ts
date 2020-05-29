import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { DepositResponse, DepositState } from '../types/deposit';
import {
  DEPOSIT_ASYNC_REQUEST,
  DEPOSIT_ASYNC_SUCCESS,
  DEPOSIT_ASYNC_FAILURE,
  DepositAction,
} from '../actions/deposit';

const initContent: DepositResponse = {
  results: [],
  totalPage: '1',
};

const initState: DepositState = {
  contents: initContent,
  isError: false,
};

export default createReducer<DepositState, DepositAction>(initState, {
  [DEPOSIT_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isError = false;
    }),
  [DEPOSIT_ASYNC_SUCCESS]: (state, action: DepositAction) =>
    produce(state, (draft) => {
      draft.isError = false;
      draft.contents = action.payload as DepositResponse;
    }),
  [DEPOSIT_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isError = true;
      draft.contents = initContent;
    }),
});
