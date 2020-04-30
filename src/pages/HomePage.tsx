import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/common/Header';

const divStyle = {
  marginTop: '4rem',
};

function HomePage({ history }: RouteComponentProps) {
  function onClick() {
    history.push('/auth/login');
  }

  return (
    <>
      <Header
        onClick={onClick}
      />
      <div style={divStyle}>Hello</div>
    </>
  );
}

export default HomePage;