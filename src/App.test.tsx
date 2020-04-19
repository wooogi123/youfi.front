import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('run App', () => {
  it('renders App.ts', () => {
    const { getByText } =  render(<App />);
    const lineElement = getByText(/learn react/i);
    expect(lineElement).toBeInTheDocument();
  });
});