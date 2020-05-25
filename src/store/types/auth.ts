export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  passwordConfirm: string;
}

export interface AuthState {
  user: LoginForm;
  isLogin: boolean;
  error: Error;
}
