import { takeEvery, call, put } from 'redux-saga/effects';
import { SavingResponse } from '../types/saving';
import {
  savingAction, SAVING_ASYNC_REQUEST,
} from '../actions/saving';
import fetchSaving from '../api/saving';

function* fetchDepositAsync() {
  try {
    const resp: SavingResponse = yield call(fetchSaving);
    yield put(savingAction.success(resp));
  } catch (err) {
    yield put(savingAction.failure(err));
  }
}

export default function* depositSaga() {
  yield takeEvery(SAVING_ASYNC_REQUEST, fetchDepositAsync);
}
