import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import LoginForm from '../Login/LoginForm';

describe('LoginPage test', () => {
  it('render LoginForm component into LoginPage', () => {
    const { getByText, getByLabelText } = render(<LoginPage />);
    getByText('Submit');
    getByLabelText('ID');
    getByLabelText('PW');
  })
});