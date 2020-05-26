import { takeEvery, call, put } from 'redux-saga/effects';
import { LoginForm, RegisterForm } from '../types/auth';
import {
  loginAction,
  registerAction,
  LOGIN_ASYNC_REQUEST,
  REGISTER_ASYNC_REQUEST,
  AuthAction,
} from '../actions/auth';
import { loginRequest, registerRequest } from '../api/auth';

function* loginAsync(action: AuthAction) {
  try {
    const resp: LoginForm = yield call(loginRequest, action.payload as LoginForm);
    yield put(loginAction.success(resp));
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}

function* registerAsync(action: AuthAction) {
  try {
    const resp: LoginForm = yield call(registerRequest, action.payload as RegisterForm);
    yield put(registerAction.success(resp));
  } catch (err) {
    yield put(registerAction.failure(err));
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN_ASYNC_REQUEST, loginAsync);
  yield takeEvery(REGISTER_ASYNC_REQUEST, registerAsync);
}
