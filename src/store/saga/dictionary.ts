import { takeEvery, call, put } from 'redux-saga/effects';
import { DictionaryContent } from '../types/dictionary';
import {
  dictionaryAction,
  DictionaryAction,
  DICTIONARY_ASYNC_REQUEST,
} from '../actions';
import { fetchDictionary } from '../api';

function* fetchDictionaryAsync(action: DictionaryAction) {
  try {
    const resp: DictionaryContent[] =
      yield call(fetchDictionary, action.payload as string);
    yield put(dictionaryAction.success(resp));
  } catch (err) {
    yield put(dictionaryAction.failure(err));
  }
}

export default function* dictionarySaga() {
  yield takeEvery(DICTIONARY_ASYNC_REQUEST, fetchDictionaryAsync);
}
