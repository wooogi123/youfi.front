import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';

interface HeaderProps {
  title: 'You-Fi' | '저축' | '대출' | '투자' | '맞춤 금융상품' | '금융 사전';
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
