import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('LoginPage test', () => {
  it('render LoginForm component into LoginPage', () => {
    const { getByText, getByLabelText } = render(<Login />);
    getByText('Submit');
    getByLabelText('ID');
    getByLabelText('PW');
  })
});