import React, { useState } from 'react';
import { useLoginAction } from '../hooks/auth';
import AuthForm from '../components/auth/AuthForm';

function LoginContainer() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const loginAction = useLoginAction();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setLogin({
      ...login,
      [e?.currentTarget.name as string]: e?.currentTarget.value,
    });
  }

  function onClick(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    loginAction(login);
  }

  return (
    <AuthForm
      type={'login'}
      email={login.email}
      password={login.password}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default LoginContainer;
