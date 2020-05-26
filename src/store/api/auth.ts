import { LoginForm, RegisterForm } from '../types/auth';

function loginRequest(payload: LoginForm): LoginForm {
  return {
    email: payload.email,
    password: payload.password,
  };
}

function registerRequest(payload: RegisterForm): LoginForm {
  if (payload.password !== payload.passwordConfirm) {
    throw new Error('not match password');
  }

  return {
    email: payload.email,
    password: payload.password,
  };
}

export { loginRequest, registerRequest };
