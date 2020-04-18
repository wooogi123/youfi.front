import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm test', () => {
  it('render LoginForm component', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    getByPlaceholderText(/ID/i);
    getByPlaceholderText(/PW/i);
  })
})