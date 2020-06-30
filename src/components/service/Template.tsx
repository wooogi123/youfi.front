import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  Header,
  Copyright,
  ServiceTitle,
  SearchProps,
} from '../common';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
    },
    footer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

interface serviceTemplateProps extends SearchProps {
  children: React.ReactNode;
  title: ServiceTitle;
}

function Template({
  children,
  title,
  isSearch,
  search,
  onChangeSearch,
}: serviceTemplateProps) {
  const classes = useStyles();

  return (
    <>
      <Header
        title={title}
        isSearch={isSearch}
        search={search}
        onChangeSearch={onChangeSearch}
      />
      <div className={classes.appBarSpacer}></div>
      <div>
        {children}
      </div>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}

export default Template;
