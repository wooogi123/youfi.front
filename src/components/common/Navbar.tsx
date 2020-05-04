/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import oc from 'open-color';
import Icon from './Icon';
import Button from './Button';

const wrapper = css`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ulStyle = css`
  margin: 0;
  list-style: none;
`;

const liStyle = css`
  margin-top: 1rem;
  padding: 0.5rem;

  & + & {
    margin: 0;
    border-top: 1px solid ${oc.gray[6]};
  }
`;

const linkStyle = css`
  color: ${oc.black};
  text-decoration: none;

  &:hover {
    color: ${oc.violet[7]};
  }
`;

export interface Service {
  name: string;
  href: string;
}

interface NavbarProps {
  services: Array<Service>;
  size?: 'small' | 'medium' | 'large';
}

function Navbar({ services, size }: NavbarProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <div css={[wrapper]}>
      <Button
        size={size}
        onClick={() => { setToggle(!toggle); }}
        iconOnly
      >
        <Icon
          icon='view'
          size='3rem'
        />
      </Button>
      {toggle &&
      <ul css={ulStyle}>
        {services.map(service =>
          <li key={service.name} css={liStyle}>
            <Link
              to={service.href}
              css={linkStyle}>
              {service.name}
            </Link>
          </li>
        )}
      </ul>
      }
    </div>
  );
}

export default Navbar;