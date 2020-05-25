import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Header, ServiceTitle } from '../common';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

interface serviceTemplateProps {
  children: React.ReactNode;
  title: ServiceTitle;
}

function Template({ children, title }: serviceTemplateProps) {
  const classes = useStyles();

  return (
    <>
      <Header title={title} />
      <div className={classes.appBarSpacer}></div>
      <div>
        {children}
      </div>
    </>
  );
}

export default Template;
