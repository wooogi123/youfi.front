import { createAsyncAction, ActionType } from 'typesafe-actions';
import { DepositResult } from '../types';

const prefix: string = 'deposit';

export const DEPOSIT_ASYNC_REQUEST = `${prefix}/DEPOSIT_ASYNC_REQUEST`;
export const DEPOSIT_ASYNC_SUCCESS = `${prefix}/DEPOSIT_ASYNC_SUCCESS`;
export const DEPOSIT_ASYNC_FAILURE = `${prefix}/DEPOSIT_ASYNC_FAILURE`;

export const depositAction = createAsyncAction(
  DEPOSIT_ASYNC_REQUEST,
  DEPOSIT_ASYNC_SUCCESS,
  DEPOSIT_ASYNC_FAILURE,
)<void, DepositResult, Error>();

export type DepositAction = ActionType<typeof depositAction>;
