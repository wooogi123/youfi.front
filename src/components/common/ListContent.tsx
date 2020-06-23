import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
  createStyles({
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
  isLogin: boolean;
}

function ListContent({ orientation }: ListContentProps) {
  const classes = useStyles();

  return (
    <>
      <List
        component={'nav'}
        className={clsx(classes.root, classes[orientation])}
      >
        {[
          { name: '예금', href: '/service/deposit' },
          { name: '적금', href: '/service/saving' },
          { name: '대출', href: '/service/loan' },
          { name: '맞춤 금융상품', href: '/service/recommend' },
          { name: '금융 사전', href: '/service/dict' },
        ]
          .map(({ name, href }) => (
            <ListItem
              button
              component={RouterLink}
              to={href}
              key={name}
            >
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  noWrap: true,
                }}
              />
            </ListItem>
          ))}
        <Divider orientation={orientation} />
      </List>
    </>
  );
}

export default ListContent;
