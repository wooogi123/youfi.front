/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import oc from 'open-color';

const Wrapper = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${oc.gray[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = css`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 25rem;
  background: #ffffff;
  border-radius: 0.25rem;

  .logo {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.25rem;
  }

  @media (max-width: 767px) {
    width: 75%;
    height: 75%;
  }
`

interface AuthTemplateProps {
  children?: React.ReactNode;
}

function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <div css={Wrapper}>
      <div css={WhiteBox}>
        <div className='logo'>
          <Link to='/'>YouFI</Link>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthTemplate;