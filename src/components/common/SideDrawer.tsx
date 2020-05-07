import React from 'react';
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import ListContent from './ListContent';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
});

interface SideDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

function SideDrawer({ open, toggleDrawer }: SideDrawerProps) {
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
          <ListItem button>
            <ListItemText primary={'YOUFI'} />
          </ListItem>
        </List>
        <Divider />
        <ListContent orientation={'horizontal'} />
      </div>
    </Drawer>
  );
}

export default SideDrawer;
