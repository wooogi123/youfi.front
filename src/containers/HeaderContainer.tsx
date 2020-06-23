import React, { useState } from 'react';
import { ServiceTitle, Header, SearchProps } from '../components/common';

interface HeaderContainerProps extends SearchProps {
  title: ServiceTitle;
}

function HeaderContainer({
  title, isSearch, search, onChangeSearch,
}: HeaderContainerProps) {
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <Header
      title={title}
      isOpen={open}
      isSearch={isSearch}
      search={search}
      toggleDrawer={toggleDrawer}
      onChangeSearch={onChangeSearch}
    />
  );
}

export default HeaderContainer;
