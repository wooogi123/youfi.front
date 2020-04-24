/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as icons from './svg';

type IconType = keyof typeof icons;
export const IconTypes: Array<IconType> = Object.keys(icons) as Array<IconType>;

export interface IconProps {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  className?: string;
}

function Icon ({ icon, color, size, className }: IconProps) {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={{ fill: color || 'currentColor', width: size, height: 'auto' }}
      className={className}
    />
  );
}

export default Icon;