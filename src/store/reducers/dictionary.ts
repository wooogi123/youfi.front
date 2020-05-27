import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { DictionaryContent, DictionaryState } from '../types/dictionary';
import {
  DICTIONARY_ASYNC_REQUEST,
  DICTIONARY_ASYNC_SUCCESS,
  DICTIONARY_ASYNC_FAILURE,
  DictionaryAction,
} from '../actions/dictionary';

const initContent: DictionaryContent = {
  category: '',
  title: '',
  keywords: [],
  summary: '',
  detail: '',
};

const initState: DictionaryState = {
  contents: [initContent],
  isError: false,
};

export default createReducer<DictionaryState, DictionaryAction>(initState, {
  [DICTIONARY_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isError = false;
    }),
  [DICTIONARY_ASYNC_SUCCESS]: (state, action: DictionaryAction) =>
    produce(state, (draft) => {
      draft.isError = false;
      draft.contents = action.payload as DictionaryContent[];
    }),
  [DICTIONARY_ASYNC_FAILURE]: (state) =>
    produce(state, (draft) => {
      draft.isError = true;
      draft.contents = [initContent];
    }),
});
