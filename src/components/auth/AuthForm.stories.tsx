import React from 'react';
import StoryRouter from 'storybook-react-router';
import AuthForm from './AuthForm'

export default {
  title: 'Components|AuthForm',
  component: AuthForm,
  decorators: [StoryRouter()],
};

export function LoginForm() {
  return <AuthForm type='login' />;
}

export function RegisterForm() {
  return <AuthForm type='register' />;
}