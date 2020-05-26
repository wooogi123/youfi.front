import React, { useState } from 'react';
import { useRegisterAction } from '../hooks/auth';
import AuthForm from '../components/auth/AuthForm';

function RegisterContainer() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const registerAction = useRegisterAction();

  function onChange(e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setRegister({
      ...register,
      [e?.currentTarget.name as string]: e?.currentTarget.value,
    });
  }

  function onClick(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    registerAction(register);
  }

  return (
    <AuthForm
      type={'register'}
      email={register.email}
      password={register.password}
      passwordConfirm={register.passwordConfirm}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default RegisterContainer;
