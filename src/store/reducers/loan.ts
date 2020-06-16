import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  RentHouseResult,
  CreditResult,
  LoanResult,
  LoanState,
} from '../types';
import {
  LOAN_ASYNC_REQUEST,
  LOAN_ASYNC_SUCCESS,
  LOAN_ASYNC_FAILURE,
  LoanAction,
} from '../actions';

const initResult: RentHouseResult | CreditResult = {
  products: [],
  options: [],
};

const initState: LoanState = {
  rentHouses: initResult as RentHouseResult,
  credits: initResult as CreditResult,
  isRentHouseLoanError: false,
  isCreditLoanError: false,
};

export default createReducer<LoanState, LoanAction>(initState, {
  [LOAN_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isRentHouseLoanError = false;
      draft.isCreditLoanError = false;
    }),
  [LOAN_ASYNC_SUCCESS]: (state, action: LoanAction) =>
    produce(state, (draft) => {
      draft.isRentHouseLoanError = false;
      draft.isCreditLoanError = false;
      draft.rentHouses = (action.payload as LoanResult).rentHouses;
      draft.credits = (action.payload as LoanResult).credits;
    }),
  [LOAN_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isRentHouseLoanError = true;
      draft.isCreditLoanError = true;
      draft.rentHouses = initResult as RentHouseResult;
      draft.credits = initResult as CreditResult;
    }),
});
