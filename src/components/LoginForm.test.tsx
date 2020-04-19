import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm test', () => {
  it('render LoginForm component', () => {
    const { getByText, getByLabelText } = render(<LoginForm />);
    getByText('Submit');
    getByLabelText('ID');
    getByLabelText('PW');
  });
});