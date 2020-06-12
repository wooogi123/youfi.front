import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  AllLoanResponse,
  RentHouseLoan,
  CreditLoan,
  LoanState,
} from '../types';
import {
  LOAN_ASYNC_REQUEST,
  LOAN_ASYNC_SUCCESS,
  LOAN_ASYNC_FAILURE,
  LoanAction,
} from '../actions';

const initResult: RentHouseLoan | CreditLoan = {
  status: [],
  products: [],
  options: [],
};

const initState: LoanState = {
  rentHouses: initResult as RentHouseLoan,
  credits: initResult as CreditLoan,
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
      draft.rentHouses = (action.payload as AllLoanResponse).rentHouses.results;
      draft.credits = (action.payload as AllLoanResponse).credits.results;
    }),
  [LOAN_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isRentHouseLoanError = true;
      draft.isCreditLoanError = true;
      draft.rentHouses = initResult as RentHouseLoan;
      draft.credits = initResult as CreditLoan;
    }),
});
