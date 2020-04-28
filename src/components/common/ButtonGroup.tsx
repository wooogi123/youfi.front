/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function gapStyle (direction: 'row' | 'column', gap: number | string) {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap
    }
  });
}

const rightAlignStyle = css`
  justify-content: flex-end;
`;

export interface ButtonGroupProps {
  /** 버튼이 나열되는 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줌 */
  rightAlign?: boolean;
  /** 버튼 사이의 간격 설정 */
  gap: number | string;
  /** 버튼 그룹에서 보여질 버튼 */
  children: React.ReactNode;
  /** 스타일 커스터마이징 */
  className?: string;
}

function ButtonGroup({
  direction,
  rightAlign,
  children,
  gap,
  className
}: ButtonGroupProps) {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle
      ]}
      className={className}
    >
      {children}
    </div>
  )
}

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
};

export default ButtonGroup;