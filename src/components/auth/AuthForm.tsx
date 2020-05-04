/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import oc from 'open-color';
import Button from '../common/Button';

const AuthFormTitle = css`
  margin: 0;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`;

const spacerTop = css`
  margin-top: 1rem;
`;

const input = css`
  width: 100%;
  line-height: 1.2;
  font-size: 1rem;
  color: ${oc.gray[8]};
  outline: none;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  padding-bottom: 1rem;

  &:focus {
    color: ${oc.violet[7]};
    border-bottom: 1px solid ${oc.violet[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const footer = css`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${oc.violet[5]};
    text-decoration: none;
    &:hover {
      color: ${oc.violet[7]};
      text-decoration: underline;
    }
  }
`;

interface AuthProps {
  type: string;
}

function AuthForm({ type }: AuthProps) {
  return (
    <div>
      <h3 css={AuthFormTitle}>
        {type === 'login' ? '로그인' : '회원가입'}
      </h3>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          css={input}
          autoComplete='username'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          css={input}
          autoComplete='new-password'
        />
        {type === 'register' && (
          <input
            type='password'
            name='passwordConfirm'
            placeholder='Password 확인'
            css={input}
            autoComplete='new-password'
          />
        )}
        <div css={spacerTop}>
          <Button
            width='100%'
            size='large'
          >
            {type === 'login' ? '로그인' : '회원가입'}
          </Button>
        </div>
      </form>
      <div css={footer}>
        {type === 'login' ? (
          <Link to='/auth/register'>회원가입</Link>
        ) : (
          <Link to='/auth/login'>로그인</Link>
        )}
      </div>
    </div>
  );
}

export default AuthForm;