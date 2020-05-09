import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../common/Header';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

interface serviceTemplateProps {
  children: React.ReactNode;
}

function Template({ children }: serviceTemplateProps) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.appBarSpacer}></div>
      <div>
        {children}
      </div>
    </>
  );
}

export default Template;
