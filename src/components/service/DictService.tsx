import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import Template from './Template';
import { DictionaryContent } from '../../store';
import { SearchProps } from '../common';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      marginTop: '2rem',
      width: '75%',
      minWidth: 300,
    },
    subMargin: {
      marginBottom: '0.5rem',
    },
  }));

interface DictServiceProps extends SearchProps {
  contents: DictionaryContent[];
}

function DictService({
  contents,
  isSearch,
  search,
  onChangeSearch,
}: DictServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'금융 사전'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {contents.map((dict: DictionaryContent) => (
          <Card className={classes.card} variant={'outlined'}>
            <CardContent>
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                color={'textSecondary'}
                gutterBottom
              >
                {dict.category}
              </Typography>
              <Typography
                variant={'h5'}
                component={'h2'}
                gutterBottom
              >
                {dict.title}
              </Typography>
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                color={'textSecondary'}
                gutterBottom
              >
                {dict.keywords.join(', ')}
              </Typography>
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
              >
                {dict.summary}
              </Typography>
              <Typography variant={'body2'} component={'p'}>
                {dict.detail}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Template>
  );
}

export default DictService;
