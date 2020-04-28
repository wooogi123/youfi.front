import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components|ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export function buttonGroup() {
  const direction = radios(
    'direction',
    { Row: 'row', Column: 'column' },
    'row'
  );
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');
  
  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button theme='tertiary'>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export function rightAlign() {
  return (
    <ButtonGroup rightAlign>
      <Button theme='tertiary'>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export function column() {
  return (
    <ButtonGroup direction='column'>
      <Button>Click</Button>
      <Button>Click</Button>
    </ButtonGroup>
  );
};

export function customGap() {
  return (
    <ButtonGroup gap='1rem'>
      <Button theme='tertiary'>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export function customGapColumn() {
  return (
    <ButtonGroup direction='column' gap='1rem'>
      <Button>Click</Button>
      <Button>Click</Button>
    </ButtonGroup>
  );
};