import React, { useState } from 'react';
import { useAuthStore } from '../hooks';
import { ServiceTitle, Header, SearchProps } from '../components/common';

interface HeaderContainerProps extends SearchProps {
  title: ServiceTitle;
}

function HeaderContainer({
  title, isSearch, search, onChangeSearch,
}: HeaderContainerProps) {
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
      isSearch={isSearch}
      search={search}
      toggleDrawer={toggleDrawer}
      onChangeSearch={onChangeSearch}
    />
  );
}

export default HeaderContainer;
