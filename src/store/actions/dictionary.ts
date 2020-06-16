import { createAsyncAction, ActionType } from 'typesafe-actions';
import { DictionaryContent } from '../types';

const prefix: string = 'dictionary';

export const DICTIONARY_ASYNC_REQUEST = `${prefix}/DICTIONARY_ASYNC_REQUEST`;
export const DICTIONARY_ASYNC_SUCCESS = `${prefix}/DICTIONARY_ASYNC_SUCCESS`;
export const DICTIONARY_ASYNC_FAILURE = `${prefix}/DICTIONARY_ASYNC_FAILURE`;

export const dictionaryAction = createAsyncAction(
  DICTIONARY_ASYNC_REQUEST,
  DICTIONARY_ASYNC_SUCCESS,
  DICTIONARY_ASYNC_FAILURE,
)<string, DictionaryContent[], Error>();

export type DictionaryAction = ActionType<typeof dictionaryAction>;
