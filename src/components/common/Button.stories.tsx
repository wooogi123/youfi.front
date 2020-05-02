/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';

export default {
  component: Button,
  title: 'components|common/Button',
  decorators: [withKnobs],
}

const GroupWrapper = css`
  display: flex;
  justify-items: center;
  align-content: center;

  & > button + button {
    margin-left: 2rem;
  }
`;;

export function button() {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'large'], 'medium');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary',
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <div css={GroupWrapper}>
      <Button
        size={size}
        theme={theme}
        disabled={disabled}
        width={width}
        onClick={action('onClick')}
      >
        {label}
      </Button>
    </div>
  );
}

button.story = {
  name: 'Default Button',
};

export function themes() {
  return (
    <div css={GroupWrapper}>
      <Button theme='primary'>{text('primary', 'PRIMARY')}</Button>
      <Button theme='secondary'>{text('secondary', 'SECONDARY')}</Button>
      <Button theme='tertiary'>{text('tertiary', 'TERTIARY')}</Button>
    </div>
  );
}

export function sizes() {
  return (
    <div css={GroupWrapper}>
      <Button size='small'>{text('small', 'SMALL')}</Button>
      <Button size='medium'>{text('medium', 'MEDIUM')}</Button>
      <Button size='large'>{text('large', 'LARGE')}</Button>
    </div>
  );
}

export function disabled() {
  return (
    <div css={GroupWrapper}>
      <Button disabled>{text('disabled-primary', 'PRIMARY')}</Button>
      <Button theme='secondary' disabled>{text('disabled-secondary', 'SECONDARY')}</Button>
      <Button theme='tertiary' disabled>{text('disabled-tertiary', 'TERTIARY')}</Button>
    </div>
  );
}

export function customSized() {
  return (
    <div css={GroupWrapper}>
      <Button width="20rem">{text('custom-width', '20rem')}</Button>
      <Button width="100%">{text('full-width', '100%')}</Button>
    </div>
  );
}

export function withIcon() {
  return (
    <div>
      <ButtonGroup>
        <Button size='small'>
          <Icon icon='arrow' /> ARROW
        </Button>
        <Button>
          <Icon icon='arrow' /> ARROW
        </Button>
        <Button size='large'>
          <Icon icon='arrow' /> ARROW
        </Button>
      </ButtonGroup>
    </div>
  );
}

export function iconOnly() {
  return (
    <div>
      <ButtonGroup>
        <Button iconOnly size='small'>
          <Icon icon='arrow' />
        </Button>
        <Button iconOnly>
          <Icon icon='arrow' />
        </Button>
        <Button iconOnly size='large'>
          <Icon icon='arrow' />
        </Button>
      </ButtonGroup>
    </div>
  );
}