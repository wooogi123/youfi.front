import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  const text = 'Button';

  describe('Button props test', () => {
    it('Button children render', () => {
      const { getByText } = render(<Button>{text}</Button>);
      getByText(text);
    });
    it('Button disabled prop render', () => {
      const { getByText } = render(<Button disabled>{text}</Button>);
      getByText(text);
    });
    it('Button width prop render', () => {
      const { getByText } = render(<Button width='20rem'>{text}</Button>);
      getByText(text);
    });
    it('Button on click event', () => {
      const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
      const { getByText } = render(<Button onClick={onClick}>{text}</Button>);
      fireEvent.click(getByText(text));
    });
  });

  describe('Button theme test', () => {
    it('Primary Button render', () => {
      const { getByText } = render(<Button theme='primary'>{text}</Button>)
      getByText(text);
    });
    it('Secondary Button render', () => {
      const { getByText } = render(<Button theme='secondary'>{text}</Button>)
      getByText(text);
    });
    it('Tertiary Button render', () => {
      const { getByText } = render(<Button theme='tertiary'>{text}</Button>)
      getByText(text);
    });
  });

  describe('Button size test', () => {
    it('Small size Button render', () => {
      const { getByText } = render(<Button size='small'>{text}</Button>);
      getByText(text);
    });
    it('Medium size Button render', () => {
      const { getByText } = render(<Button size='medium'>{text}</Button>);
      getByText(text);
    });
    it('Large size Button render', () => {
      const { getByText } = render(<Button size='large'>{text}</Button>);
      getByText(text);
    });
  });
});