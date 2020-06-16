import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  Typography,
  Link,
  Hidden,
} from '@material-ui/core';
import { ServiceTitle } from './types';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }));

const services: Record<ServiceTitle, string> = {
  'You-Fi': '/',
  예금: '/service/deposit',
  적금: '/service/saving',
  대출: '/service/loan',
  '맞춤 금융상품': '/service/recommend',
  '금융 사전': '/service/dict',
  '': '/',
};

interface ResponsiveTitleProps {
  title: ServiceTitle;
}

function ResponsiveTitle({ title }: ResponsiveTitleProps) {
  const classes = useStyles();

  return (
    <Typography
      component={'h1'}
      variant={'h6'}
      color={'inherit'}
      noWrap
      className={classes.title}
    >
      <Hidden mdDown>
        <Link
          component={RouterLink}
          to={'/'}
          color={'inherit'}
          underline={'none'}
        >
          You-Fi
        </Link>
      </Hidden>
      <Hidden lgUp>
        <Link
          component={RouterLink}
          to={services[title]}
          color={'inherit'}
          underline={'none'}
        >
          {title}
        </Link>
      </Hidden>
    </Typography>
  );
}

export default ResponsiveTitle;
