import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage test', () => {
  it('render LoginForm component into LoginPage', () => {
    const { getByText, getByLabelText } = render(<LoginPage />);
    getByText('Submit');
    getByLabelText('ID');
    getByLabelText('PW');
  })
});