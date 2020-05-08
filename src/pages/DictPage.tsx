import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../components/common/Header';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

function DictPage() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.appBarSpacer}></div>
      <div className={classes.content}>
        DictPage
      </div>
    </>
  );
}

export default DictPage;
