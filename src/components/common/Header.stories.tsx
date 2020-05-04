import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

export default {
  title: 'components|common/Header',
  component: Header,
  decorators: [withKnobs, StoryRouter()],
};

export function header() {
  const services = [
    { name: 'Test1', href: '/1' },
    { name: 'Test2', href: '/2' },
    { name: 'Test3', href: '/3' },
    { name: 'Test4', href: '/4' },
    { name: 'Test5', href: '/5' },
    { name: 'Test6', href: '/6' },
  ];
  return (
    <Header services={services} />
  );
}