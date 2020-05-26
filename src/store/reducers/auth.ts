import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { LoginForm, AuthState } from '../types/auth';
import {
  LOGIN_ASYNC_REQUEST,
  LOGIN_ASYNC_SUCCESS,
  LOGIN_ASYNC_FAILURE,
  REGISTER_ASYNC_REQUEST,
  REGISTER_ASYNC_SUCCESS,
  REGISTER_ASYNC_FAILURE,
  AuthAction,
} from '../actions/auth';

const initializeState: AuthState = {
  user: {
    email: '',
    password: '',
  },
  isLogin: false,
  isError: false,
  error: new Error(),
};

export default createReducer<AuthState, AuthAction>(initializeState, {
  [LOGIN_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isLogin = true;
      draft.isError = false;
    }),
  [LOGIN_ASYNC_SUCCESS]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user = action.payload as LoginForm;
      draft.isLogin = true;
      draft.isError = false;
    }),
  [LOGIN_ASYNC_FAILURE]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.isLogin = false;
      draft.isError = true;
      draft.error = action.payload as Error;
    }),
  [REGISTER_ASYNC_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.isLogin = false;
      draft.isError = false;
    }),
  [REGISTER_ASYNC_SUCCESS]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.user = action.payload as LoginForm;
      draft.isLogin = true;
      draft.isError = false;
    }),
  [REGISTER_ASYNC_FAILURE]: (state, action: AuthAction) =>
    produce(state, (draft) => {
      draft.isLogin = false;
      draft.isError = false;
      draft.error = action.payload as Error;
    }),
});
