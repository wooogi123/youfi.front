import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  fade,
  InputBase,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListContent from './ListContent';

const useStyles = makeStyles((theme) => ({
  toolbar: {
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    paddingRight: 12,
    marginRight: -12,
  },
  title: {
    flexGrow: 1,
  },
  search: {
    flexGrow: 1,
    width: 'auto',
    marginRight: 12,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '20ch',
    [theme.breakpoints.down('md')]: {
      width: '12ch',
    },
  },
}));

interface AppbarProps {
  title: string;
  toggleDrawer: () => void;
}

function Appbar({ title, toggleDrawer }: AppbarProps) {
  const classes = useStyles();

  return (
    <AppBar position={'absolute'} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component={'h1'}
          variant={'h6'}
          color={'inherit'}
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder={'Search'}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Hidden mdDown>
          <ListContent orientation={'vertical'} />
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color={'inherit'}
            aria-label={'open drawer'}
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
