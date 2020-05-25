import { LoginForm, RegisterForm } from '../types/auth';

function loginRequest(payload: LoginForm): LoginForm {
  return {
    email: payload.email,
    password: payload.password,
  };
}

function registerRequest(payload: RegisterForm): LoginForm {
  return {
    email: payload.email,
    password: payload.password,
  };
}

export { loginRequest, registerRequest };
