import { takeEvery, call, put } from 'redux-saga/effects';
import { AllLoanResponse } from '../types';
import { loanAction, LOAN_ASYNC_REQUEST } from '../actions';
import { fetchLoan } from '../api';

function* fetchLoanAsync() {
  try {
    const resp: AllLoanResponse = yield call(fetchLoan);
    yield put(loanAction.success(resp));
  } catch (err) {
    yield put(loanAction.failure(err));
  }
}

export default function* loanSaga() {
  yield takeEvery(LOAN_ASYNC_REQUEST, fetchLoanAsync);
}
