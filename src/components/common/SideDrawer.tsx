import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import ListContent from './ListContent';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 200,
    },
  }));

interface SideDrawerProps {
  open: boolean;
  isLogin: boolean;
  toggleDrawer: () => void;
}

function SideDrawer({ open, isLogin, toggleDrawer }: SideDrawerProps) {
  const classes = useStyles();

  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className={classes.list}>
        <List>
          <ListItem button component={RouterLink} to={'/'}>
            <ListItemText primary={'YOUFI'} />
          </ListItem>
        </List>
        <Divider />
        <ListContent
          orientation={'vertical'}
          isLogin={isLogin}
        />
      </div>
    </Drawer>
  );
}

export default SideDrawer;
