import React from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';
import { ServiceTitle } from './ResponsiveTitle';

interface HeaderProps {
  title: ServiceTitle;
  isOpen: boolean;
  isLogin: boolean;
  toggleDrawer: () => void;
}

function Header({
  title, isOpen, isLogin, toggleDrawer,
}: HeaderProps) {
  return (
    <>
      <Appbar
        title={title}
        isLogin={isLogin}
        toggleDrawer={toggleDrawer}
      />
      <Hidden lgUp>
        <SideDrawer
          open={isOpen}
          isLogin={isLogin}
          toggleDrawer={toggleDrawer}
        />
      </Hidden>
    </>
  );
}

export default Header;
