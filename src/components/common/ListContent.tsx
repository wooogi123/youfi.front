import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
}));

interface ListContentProps {
  orientation: 'vertical' | 'horizontal';
}

function ListContent({ orientation }: ListContentProps) {
  const classes = useStyles();

  return (
    <>
      <List component={'nav'} className={clsx(classes.root, classes[orientation])}>
        {[
          { name: '저축', href: '/service/store' },
          { name: '대출', href: '/service/loan' },
          { name: '투자', href: '/service/invest' },
          { name: '맞춤 금융상품', href: '/service/recommend' },
          { name: '금융 사전', href: '/service/dict' },
        ].map(({ name, href }) => (
          <ListItem button component={RouterLink} to={href} key={name}>
            <ListItemText
              primary={name}
              primaryTypographyProps={{
                noWrap: true,
              }}
            />
          </ListItem>
        ))}
        <Divider orientation={orientation} />
        <ListItem button component={RouterLink} to={'/auth/login'}>
          <ListItemText
            primary={'로그인'}
            primaryTypographyProps={{
              noWrap: true,
            }}
          />
        </ListItem>
      </List>
    </>
  );
}

export default ListContent;
