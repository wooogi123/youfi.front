import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';
import { ServiceTitle } from './ResponsiveTitle';

interface HeaderProps {
  title: ServiceTitle;
}

function Header({ title }: HeaderProps) {
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <Appbar title={title} toggleDrawer={toggleDrawer} />
      <Hidden lgUp>
        <SideDrawer open={open} toggleDrawer={toggleDrawer} />
      </Hidden>
    </>
  );
}

export default Header;
