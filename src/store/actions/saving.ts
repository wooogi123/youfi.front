import { createAsyncAction, ActionType } from 'typesafe-actions';
import { SavingResult } from '../types';

const prefix: string = 'saving';

export const SAVING_ASYNC_REQUEST = `${prefix}/SAVING_ASYNC_REQUEST`;
export const SAVING_ASYNC_SUCCESS = `${prefix}/SAVING_ASYNC_SUCCESS`;
export const SAVING_ASYNC_FAILURE = `${prefix}/SAVING_ASYNC_FAILURE`;

export const savingAction = createAsyncAction(
  SAVING_ASYNC_REQUEST,
  SAVING_ASYNC_SUCCESS,
  SAVING_ASYNC_FAILURE,
)<void, SavingResult, Error>();

export type SavingAction = ActionType<typeof savingAction>;
