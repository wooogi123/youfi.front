import React, { useState } from 'react';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';

function Header() {
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <Appbar title={'YOUFI'} open={open} toggleDrawer={toggleDrawer} />
      <SideDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Header;
