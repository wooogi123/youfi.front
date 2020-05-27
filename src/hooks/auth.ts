import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginAction,
  registerAction,
  RootState,
  LoginForm,
  RegisterForm,
} from '../store';

export function useAuthStore() {
  const auth = useSelector((state: RootState) => state.auth);
  return auth;
}

export function useLoginAction() {
  const dispatch = useDispatch();
  return useCallback((login: LoginForm) =>
    dispatch(loginAction.request(login)), [dispatch]);
}

export function useRegisterAction() {
  const dispatch = useDispatch();
  return useCallback((register: RegisterForm) =>
    dispatch(registerAction.request(register)), [dispatch]);
}
