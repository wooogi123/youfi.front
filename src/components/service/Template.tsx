import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Header } from '../common';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

interface serviceTemplateProps {
  children: React.ReactNode;
  title: 'You-Fi' | '저축' | '대출' | '투자' | '맞춤 금융상품' | '금융 사전';
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
