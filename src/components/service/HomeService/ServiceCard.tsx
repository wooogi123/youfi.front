import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media: {
      width: 300,
      height: 300,
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
  image?: {
    href?: string;
    title?: string;
  },
}

function ServiceCard({
  title,
  keywords,
  href,
  image,
}: ServiceCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant={'outlined'}>
      {image && (
        <CardMedia
          className={classes.media}
          image={image.href}
          title={image.title}
        />
      )}
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
