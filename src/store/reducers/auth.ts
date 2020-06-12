import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { LoginForm, AuthError, AuthState } from '../types';
import {
  LOGIN_ASYNC_REQUEST,
  LOGIN_ASYNC_SUCCESS,
  LOGIN_ASYNC_FAILURE,
  REGISTER_ASYNC_REQUEST,
  REGISTER_ASYNC_SUCCESS,
  REGISTER_ASYNC_FAILURE,
  AuthAction,
} from '../actions';

const initUser: LoginForm = {
  email: '',
  password: '',
};

const initError: AuthError = {
  login: false,
  register: false,
};

const initState: AuthState = {
  user: initUser,
  isLogin: false,
  isError: initError,
  errorMsg: '',
};

export default createReducer<AuthState, AuthAction>(initState, {
  [LOGIN_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isLogin = false;
      draft.isError.login = false;
    }),
  [LOGIN_ASYNC_SUCCESS]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user = action.payload as LoginForm;
      draft.isLogin = true;
      draft.isError.login = false;
    }),
  [LOGIN_ASYNC_FAILURE]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user.password = '';
      draft.isLogin = false;
      draft.isError.login = true;
      draft.errorMsg = (action.payload as Error).message;
    }),
  [REGISTER_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isLogin = false;
      draft.isError.register = false;
    }),
  [REGISTER_ASYNC_SUCCESS]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user = action.payload as LoginForm;
      draft.isLogin = true;
      draft.isError.register = false;
    }),
  [REGISTER_ASYNC_FAILURE]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user.password = '';
      draft.isLogin = false;
      draft.isError.register = true;
      draft.errorMsg = (action.payload as Error).message;
    }),
});
