import React from 'react';
import {
  Card, CardContent, Typography, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
    maxWidth: '75%',
    minWidth: 300,
  },
  subMargin: {
    marginBottom: '0.5rem',
  },
});

interface ContentCard {
  category: string;
  title: string;
  keywords: string[];
  summary: string;
  detail: string;
}

function ContentCard({
  category, title, keywords, summary, detail,
}: ContentCard) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant={'outlined'}>
      <CardContent>
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          color={'textSecondary'}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant={'h5'} component={'h2'} gutterBottom>
          {title}
        </Typography>
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          color={'textSecondary'}
          gutterBottom
        >
          {keywords.join(', ')}
        </Typography>
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          component={'p'}
          gutterBottom
        >
          {summary}
        </Typography>
        <Typography variant={'body2'} component={'p'}>
          {detail}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ContentCard;
