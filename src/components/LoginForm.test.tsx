import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm test', () => {
  it('render LoginForm component', () => {
    const { getByLabelText } = render(<LoginForm />);
    getByLabelText('ID');
    getByLabelText('PW');
  });
});