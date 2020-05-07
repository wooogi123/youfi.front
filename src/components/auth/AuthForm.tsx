import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Copyright from '../common/Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface AuthFormProps {
  type: string;
}

function AuthForm({ type }: AuthFormProps) {
  const classes = useStyles();

  return (
    <Container component={'main'} maxWidth={'xs'}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component={'h1'} variant={'h5'}>
          {type === 'login' ? '로그인' : '회원가입'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            id={'email'}
            label={'Email Address'}
            name={'email'}
            autoComplete={'email'}
            autoFocus
          />
          <TextField
            variant={'outlined'}
            margin={'normal'}
            required
            fullWidth
            id={'password'}
            label={'Password'}
            name={'password'}
            type={'password'}
            autoComplete={'current-password'}
          />
          {type === 'register' && (
            <TextField
              variant={'outlined'}
              margin={'normal'}
              required
              fullWidth
              id={'passwordConfirm'}
              label={'Password 확인'}
              name={'passwordConfirm'}
              type={'password'}
            />
          )}
          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            className={classes.submit}
          >
            {type === 'login' ? '로그인' : '회원가입'}
          </Button>
          {type === 'login' ? (
            <Grid container justify={'flex-end'}>
              <Grid item>
                <Link component={RouterLink} variant={'body2'} to={'/auth/register'}>
                  아직 회원이 아니신가요?
                </Link>
              </Grid>
            </Grid>
          ) : (
            <Grid container justify={'flex-end'}>
              <Grid item>
                <Link component={RouterLink} variant={'body2'} to={'/auth/login'}>
                  이미 계정이 있으신가요?
                </Link>
              </Grid>
            </Grid>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AuthForm;
