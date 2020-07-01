import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';
import { SearchProps, ServiceTitle } from './types';

interface HeaderProps extends SearchProps {
  title: ServiceTitle;
}

function Header({
  title,
  isSearch,
  search,
  onChangeSearch,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Appbar
        title={title}
        isSearch={isSearch}
        search={search}
        toggleDrawer={() => (setOpen(!open))}
        onChangeSearch={onChangeSearch}
      />
      <Hidden lgUp>
        <SideDrawer
          open={open}
          toggleDrawer={() => (setOpen(!open))}
        />
      </Hidden>
    </>
  );
}

export default Header;
