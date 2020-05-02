import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Header from './Header';

export default {
  title: 'components|common/Header',
  component: Header,
  decorators: [withKnobs],
};

export function header() {
  return (
    <Header />
  );
}