import { takeEvery, call, put } from 'redux-saga/effects';
import { DepositResult } from '../types';
import {
  depositAction, DEPOSIT_ASYNC_REQUEST,
} from '../actions';
import { fetchDeposit } from '../api';

function* fetchDepositAsync() {
  try {
    const resp: DepositResult = yield call(fetchDeposit);
    yield put(depositAction.success(resp));
  } catch (err) {
    yield put(depositAction.failure(err));
  }
}

export default function* depositSaga() {
  yield takeEvery(DEPOSIT_ASYNC_REQUEST, fetchDepositAsync);
}
