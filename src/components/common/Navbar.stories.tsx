import React from 'react';
import StoryRouter from 'storybook-react-router';
import Navbar from './Navbar';

export default {
  title: 'components|Navbar',
  component: Navbar,
  decorators: [StoryRouter()],
};

export function navbar() {
  const services = [
    { name: 'Test1', href: '/1' },
    { name: 'Test2', href: '/2' },
    { name: 'Test3', href: '/3' },
    { name: 'Test4', href: '/4' },
    { name: 'Test5', href: '/5' },
    { name: 'Test6', href: '/6' },
  ]
  return <Navbar services={services} />;
}