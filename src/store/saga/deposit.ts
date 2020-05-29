import { takeEvery, call, put } from 'redux-saga/effects';
import { DepositRequest, DepositResponse } from '../types/deposit';
import {
  depositAction, DepositAction, DEPOSIT_ASYNC_REQUEST,
} from '../actions/deposit';
import fetchDeposit from '../api/deposit';

function* fetchDepositAsync(action: DepositAction) {
  try {
    const resp: DepositResponse =
      yield call(fetchDeposit, action.payload as DepositRequest);
    yield put(depositAction.success(resp));
  } catch (err) {
    yield put(depositAction.failure(err));
  }
}

export default function* depositSaga() {
  yield takeEvery(DEPOSIT_ASYNC_REQUEST, fetchDepositAsync);
}
