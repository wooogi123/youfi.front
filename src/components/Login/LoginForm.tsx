/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '../common/Button';

const Wrapper = css`
  width: 100%;
  background: #fff;
  border-radius: 0.5rem;
  position: relative;
  
  @media (min-width: 768px) {
    width: 25rem;
  }
`;

const paddingY = css`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const form = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const formTitle = css`
  font-size: 1rem;
  color: #403866;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 2rem;
`;

const inputWrapper = css`
  width: 100%;
  position: relative;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const input = css`
  color: #403866;
  line-height: 1.2;
  font-size: 1.2rem;
  display: block;
  width: 100%;
  border: 1px solid #a0aec0;
  border-radius: 0.2rem;
  height: 3rem;

  &:focus {
    color: #793698;
    transition: all 0.4s;
    border: 1px solid #793698;
  }
`;

const forget = css`
  display: flex;

  a {
    color: #793698;
    line-height: 1.5;
    font-size: 0.8rem;
    text-decoration: none;
  }
`;

const buttonWrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

function LoginForm() {
  return (
    <div css={[Wrapper, paddingY]}>
      <form css={form}>
        <h1 css={formTitle}>LOGIN</h1>
        <div css={inputWrapper}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            css={input}
          />
        </div>
        <div css={inputWrapper}>
          <input
            type='password'
            placeholder='Password'
            css={input}
          />
        </div>
        <div css={forget}>
          <div>
            <a href='/auth/find'>아이디 또는 비밀번호를 잊으셧나요?</a>
          </div>
        </div>
        <div css={buttonWrapper}>
          <Button
            width='100%'
            size='large'
          >
            LOGIN
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm