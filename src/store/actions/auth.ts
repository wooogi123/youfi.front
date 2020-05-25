import { createAsyncAction, ActionType } from 'typesafe-actions';
import { LoginForm, RegisterForm } from '../types/auth';

const prefix: string = 'auth';

export const LOGIN_ASYNC_REQUEST = `${prefix}/LOGIN_ASYNC_REQUEST`;
export const LOGIN_ASYNC_SUCCESS = `${prefix}/LOGIN_ASYNC_SUCCESS`;
export const LOGIN_ASYNC_FAILURE = `${prefix}/LOGIN_ASYNC_FAILURE`;

export const REGISTER_ASYNC_REQUEST = `${prefix}/REGISTER_ASYNC_REQUEST`;
export const REGISTER_ASYNC_SUCCESS = `${prefix}/REGISTER_ASYNC_SUCCESS`;
export const REGISTER_ASYNC_FAILURE = `${prefix}/REGISTER_ASYNC_FAILURE`;

export const loginAction = createAsyncAction(
  LOGIN_ASYNC_REQUEST,
  LOGIN_ASYNC_SUCCESS,
  LOGIN_ASYNC_FAILURE,
)<LoginForm, LoginForm, Error>();

export const registerAction = createAsyncAction(
  REGISTER_ASYNC_REQUEST,
  REGISTER_ASYNC_SUCCESS,
  REGISTER_ASYNC_FAILURE,
)<RegisterForm, LoginForm, Error>();

const auth = {
  loginAction,
  registerAction,
};

export type AuthAction = ActionType<typeof auth>;
