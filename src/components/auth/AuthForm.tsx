import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import { Copyright } from '../common';

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

export type AuthType = 'login' | 'register';

interface AuthFormProps {
  type: AuthType;
  email: string;
  password: string;
  passwordConfirm?: string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

function AuthForm({
  type, email, password, passwordConfirm, onChange, onClick,
}: AuthFormProps) {
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
            value={email}
            onChange={onChange}
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
            value={password}
            onChange={onChange}
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
              value={passwordConfirm}
              onChange={onChange}
            />
          )}
          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            className={classes.submit}
            onClick={onClick}
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
