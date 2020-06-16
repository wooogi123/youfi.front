import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  SavingResult,
  SavingState,
} from '../types';
import {
  SAVING_ASYNC_REQUEST,
  SAVING_ASYNC_SUCCESS,
  SAVING_ASYNC_FAILURE,
  SavingAction,
} from '../actions';

const initResult: SavingResult = {
  products: [],
  options: [],
};

const initState: SavingState = {
  contents: initResult,
  isError: false,
};

export default createReducer<SavingState, SavingAction>(initState, {
  [SAVING_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isError = false;
    }),
  [SAVING_ASYNC_SUCCESS]: (state, action: SavingAction) =>
    produce(state, (draft) => {
      draft.isError = false;
      draft.contents = action.payload as SavingResult;
    }),
  [SAVING_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isError = true;
      draft.contents = initResult;
    }),
});
