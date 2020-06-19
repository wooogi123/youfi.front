import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '80vh',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

interface ServiceCardProps {
  title?: string,
  keywords: string[];
  href?: string,
}

function ServiceCard({ title, keywords, href }: ServiceCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant={'outlined'}>
      <CardContent className={classes.content}>
        {title && (
          <Typography
            variant={'h5'}
            component={'h2'}
            gutterBottom
          >
            {title}
          </Typography>
        )}
        {keywords && keywords.map((keyword: string) => (
          <Typography
            variant={'body1'}
            gutterBottom
            key={keyword}
          >
            {keyword}
          </Typography>
        ))}
        {href && (
          <Button
            variant={'contained'}
            component={RouterLink}
            to={href}
          >
            시작하기
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
