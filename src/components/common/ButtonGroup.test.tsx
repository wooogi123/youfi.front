import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('<ButtonGroup />', () => {
  it('ButtonGroup has one button', () => {
    const text = 'BUTTON';
    const button = <Button>{text}</Button>;
    const { getByText } = render(<ButtonGroup>{button}</ButtonGroup>);
    getByText(text);
  });
  it('ButtonGroup has 3 buttons', () => {
    const texts = ['primary', 'secondary', 'tertiary'];
    const primary = <Button theme='primary' size='small' disabled>{texts[0]}</Button>;
    const secondary = <Button theme='secondary' size='large' width='20rem'>{texts[1]}</Button>;
    const tertiary = <Button theme='tertiary'>{texts[2]}</Button>;
    const { getByText } = render(
      <ButtonGroup>
        {primary}
        {secondary}
        {tertiary}
      </ButtonGroup>
    );
    texts.forEach(el => {
      getByText(el);
    });
  });
});