import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ServiceTitle, SearchProps } from '../common';
import HeaderContainer from '../../containers/HeaderContainer';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
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
      <HeaderContainer
        title={title}
        isSearch={isSearch}
        search={search}
        onChangeSearch={onChangeSearch}
      />
      <div className={classes.appBarSpacer}></div>
      <div>
        {children}
      </div>
    </>
  );
}

export default Template;
