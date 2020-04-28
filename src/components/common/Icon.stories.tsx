/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { IconTypes } from './Icon';

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export default {
  component: Icon,
  title: 'components|Icon'
};

export function icon() {
  return <Icon icon='arrow' />;
}

icon.story = {
  name: 'Arrow',
};

export function customSize() {
  return <Icon icon='arrow' size='4rem' />;
}

export function customColor() {
  return <Icon icon='arrow' color='red' />;
}

export function customizedWithStyle() {
  return <Icon icon='arrow' css={{ color: 'red', width: '4rem' }} />;
}


export function listOfIcons() {
  return (
    <ul css={iconListStyle}>
      {IconTypes.map((icon, idx) => (
        <li key={idx}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  )
}