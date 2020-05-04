/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar, { Service } from './Navbar';

const headerWrapper = css`
  width: 100%;
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const responsive = css`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const wrapper = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const logo = css`
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: 2px;
`;

const right = css`
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  services: Array<Service>;
}

function Header({ services }: HeaderProps) {
  return (
    <div css={headerWrapper}>
      <div css={[responsive, wrapper]}>
        <div css={logo}>YOU FI</div>
        <div css={right}>
          <Navbar
            services={services}
            size='large'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;