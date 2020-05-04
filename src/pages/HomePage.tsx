import React from 'react';
import Header from '../components/common/Header';

const divStyle = {
  marginTop: '4rem',
};

function HomePage() {
  const services = [
    { name: '로그인 / 회원가입', href: '/auth/login' },
    { name: 'Test1', href: '/test1' },
    { name: 'Test2', href: '/test2' },
    { name: 'Test3', href: '/test3' },
    { name: 'Test4', href: '/test4' },
    { name: 'Test5', href: '/test5' },
    { name: 'Test6', href: '/test6' },
    { name: 'Test7', href: '/test7' },
  ];

  return (
    <>
      <Header
        services={services}
      />
      <div style={divStyle}>Hello</div>
    </>
  );
}

export default HomePage;