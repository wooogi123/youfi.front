import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';

function Header() {
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <Appbar title={'YOUFI'} toggleDrawer={toggleDrawer} />
      <Hidden lgUp>
        <SideDrawer open={open} toggleDrawer={toggleDrawer} />
      </Hidden>
    </>
  );
}

export default Header;
