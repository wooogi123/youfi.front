import React from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';
import { SearchProps, ServiceTitle } from './types';

interface HeaderProps extends SearchProps {
  title: ServiceTitle;
  isOpen: boolean;
  toggleDrawer: () => void;
}

function Header({
  title,
  isOpen,
  isSearch,
  search,
  toggleDrawer,
  onChangeSearch,
}: HeaderProps) {
  return (
    <>
      <Appbar
        title={title}
        isSearch={isSearch}
        search={search}
        toggleDrawer={toggleDrawer}
        onChangeSearch={onChangeSearch}
      />
      <Hidden lgUp>
        <SideDrawer
          open={isOpen}
          toggleDrawer={toggleDrawer}
        />
      </Hidden>
    </>
  );
}

export default Header;
