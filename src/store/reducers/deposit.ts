import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  DepositResponse,
  DepositResult,
  DepositState,
} from '../types';
import {
  DEPOSIT_ASYNC_REQUEST,
  DEPOSIT_ASYNC_SUCCESS,
  DEPOSIT_ASYNC_FAILURE,
  DepositAction,
} from '../actions';

const initResult: DepositResult = {
  status: [],
  products: [],
  options: [],
};

const initState: DepositState = {
  contents: initResult,
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
      draft.contents = (action.payload as DepositResponse).results;
    }),
  [DEPOSIT_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isError = true;
      draft.contents = initResult;
    }),
});
