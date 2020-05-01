import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

interface Service {
  name: string;
  href: string;
}

interface NavbarProps {
  services: Array<Service>;
}

function Navbar({ services }: NavbarProps) {
  return (
    <div>
      <Icon icon='view' size='3rem' />
      <ul>
        {services.map(service =>
          <li key={service.name}>
            <Link to={service.href}>{service.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;