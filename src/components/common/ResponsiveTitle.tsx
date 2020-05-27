import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Link,
  makeStyles,
  Hidden,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export type ServiceTitle = 'You-Fi' | '저축' | '대출' | '투자' | '맞춤 금융상품' | '금융 사전' | '';

const services: Record<ServiceTitle, string> = {
  'You-Fi': '/',
  저축: '/service/store',
  대출: '/service/loan',
  투자: '/service/invest',
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
