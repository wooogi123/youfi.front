import React from 'react';

function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="username">ID</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">PW</label>
        <input id="password" />
      </div>
    </form>
  );
}

export default LoginForm;