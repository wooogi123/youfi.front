import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './common/Header';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.appBarSpacer}></div>
      <div className={classes.content}>
        {children}
      </div>
    </>
  );
}

export default PageTemplate;
