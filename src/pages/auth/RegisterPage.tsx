import React, { useState } from 'react';
import { useAuthStore, useRegisterAction } from '../../hooks';
import AuthForm from '../../components/auth/AuthForm';

function RegisterPage() {
  const store = useAuthStore();
  const [register, setRegister] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const registerAction = useRegisterAction();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setRegister({
      ...register,
      [e?.currentTarget.name as string]: e?.currentTarget.value as string,
    });
  }

  function onClick(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    registerAction(register);
    setRegister({
      email: '',
      password: '',
      passwordConfirm: '',
    });
  }

  return (
    <AuthForm
      type={'register'}
      email={register.email}
      password={register.password}
      passwordConfirm={register.passwordConfirm}
      isError={store.isError.register}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default RegisterPage;
