export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  passwordConfirm: string;
}

export interface AuthError {
  login: boolean;
  register: boolean;
}

export interface AuthState {
  user: LoginForm;
  isLogin: boolean;
  isError: AuthError;
  errorMsg: string;
}
