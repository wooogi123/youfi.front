import { takeEvery, call, put } from 'redux-saga/effects';
import { DepositResponse } from '../types/deposit';
import {
  depositAction, DEPOSIT_ASYNC_REQUEST,
} from '../actions/deposit';
import fetchDeposit from '../api/deposit';

function* fetchDepositAsync() {
  try {
    const resp: DepositResponse = yield call(fetchDeposit);
    yield put(depositAction.success(resp));
  } catch (err) {
    yield put(depositAction.failure(err));
  }
}

export default function* depositSaga() {
  yield takeEvery(DEPOSIT_ASYNC_REQUEST, fetchDepositAsync);
}
