import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

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
    >
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemText primary={'YOUFI'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {['저축', '대출', '투자', '맞춤 금융상품', '금융 사전'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to={'/auth/login'}>
            <ListItemText primary={'로그인'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
