import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link component={RouterLink} color='inherit' to='/'>
        YOUFI
      </Link>
      {' 2020. '}
    </Typography>
  );
}

export default Copyright;