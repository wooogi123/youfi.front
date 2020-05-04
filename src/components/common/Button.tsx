/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import oc from 'open-color';

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  }
  &:focus:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1em;
    margin-rioght: 1em;
  }
`;

const themes = {
  primary: css`
    background: ${oc.violet[9]};
    color: ${oc.white};
    svg {
      fill: ${oc.white};
    }
    &:hover:enabled {
      background: ${oc.violet[7]};
    }
    &:active:enabled {
      background: ${oc.violet[7]};
    }
    &:disabled {
      background: ${oc.violet[3]};
    }
  `,
  secondary: css`
    background: ${oc.gray[2]};
    color: ${oc.gray[8]};
    svg {
      fill: ${oc.gray[8]};
    }
    &:hover:enabled {
      background: ${oc.gray[4]};
    }
    &:active:enabled {
      background: ${oc.gray[4]};
    }
    &:disabled {
      color: ${oc.gray[5]};
      svg {
        fill: ${oc.gray[5]};
      }
    }
  `,
  tertiary: css`
    background: #none;
    color: ${oc.violet[9]};
    svg {
      fill: ${oc.violet[9]};
    }
    &:hover:enabled {
      color: ${oc.violet[7]};
    }
    &:active:enabled {
      color: ${oc.violet[7]};
    }
    &:disabled {
      color: ${oc.violet[3]};
      svg {
        fill: ${oc.violet[3]};
      }
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  large: css`
    width: 3rem;
  `,
};

interface ButtonProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 클릭 이벤트 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 테마 선택 */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼 크기 선택 */
  size: 'small' | 'medium' | 'large';
  /** 버튼 비활성화 */
  disabled?: boolean;
  /** 버튼 너비 설정 */
  width?: string;
  /** 버튼 아이콘만 보이게하는 설정 */
  iconOnly?: boolean;
}

/** `Button` 컴포넌트 */
function Button({
  children,
  theme,
  size,
  disabled,
  width,
  iconOnly,
  onClick
}: ButtonProps) {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]]
      ]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
}

export default Button;