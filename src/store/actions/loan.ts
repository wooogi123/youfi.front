import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  AllLoanResponse,
} from '../types';

const predix: string = 'loan';

export const LOAN_ASYNC_REQUEST = `${predix}/LOAN_ASYNC_REQUEST`;
export const LOAN_ASYNC_SUCCESS = `${predix}/LOAN_ASYNC_SUCCESS`;
export const LOAN_ASYNC_FAILURE = `${predix}/LOAN_ASYNC_FAILURE`;

export const loanAction = createAsyncAction(
  LOAN_ASYNC_REQUEST,
  LOAN_ASYNC_SUCCESS,
  LOAN_ASYNC_FAILURE,
)<void, AllLoanResponse, Error>();

export type LoanAction = ActionType<typeof loanAction>;
