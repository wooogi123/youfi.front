import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  vertical: {
    flexDirection: 'row',
  },
  horizontal: {
    flexDirection: 'column',
  },
}));

interface ListContentProps {
  orientation: 'vertical' | 'horizontal';
}

function ListContent({ orientation }: ListContentProps) {
  const classes = useStyles();

  return (
    <>
      <List component={'nav'} className={(classes.root, classes[orientation])}>
        {['저축', '대출', '투자', '맞춤 금융상품', '금융 사전'].map((text) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
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
