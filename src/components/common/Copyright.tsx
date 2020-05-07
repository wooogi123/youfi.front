import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant={'body2'} color={'textSecondary'} align={'center'}>
      {'Copyright © '}
      <Link component={RouterLink} color={'inherit'} to={'/'}>
        YOUFI
      </Link>
      {' 2020. '}
    </Typography>
  );
}

export default Copyright;
