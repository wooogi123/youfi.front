import React, { useState } from 'react';
import { useAuthStore } from '../hooks';
import { ServiceTitle, Header } from '../components/common';

interface HeaderContainerProps {
  title: ServiceTitle;
}

function HeaderContainer({ title }: HeaderContainerProps) {
  const store = useAuthStore();
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <Header
      title={title}
      isOpen={open}
      isLogin={store.isLogin}
      toggleDrawer={toggleDrawer}
    />
  );
}

export default HeaderContainer;
