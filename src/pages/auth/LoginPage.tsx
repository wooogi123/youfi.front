import React, { useState } from 'react';
import { useAuthStore, useLoginAction } from '../../hooks';
import AuthForm from '../../components/auth/AuthForm';

function LoginPage() {
  const store = useAuthStore();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const loginAction = useLoginAction();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setLogin({
      ...login,
      [e?.currentTarget.name as string]: e?.currentTarget.value as string,
    });
  }

  function onClick(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    loginAction(login);
    setLogin({
      ...login,
      password: '',
    });
  }

  return (
    <AuthForm
      type={'login'}
      email={login.email}
      password={login.password}
      isError={store.isError.login}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default LoginPage;
