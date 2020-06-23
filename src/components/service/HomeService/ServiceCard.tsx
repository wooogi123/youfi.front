import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '75vh',
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
    subMargin: {
      marginBottom: theme.spacing(2),
    },
  }));

interface ServiceCardProps {
  className?: string;
  title?: string,
  keywords: string[];
  href?: string,
  buttonText?: string,
  image?: {
    href?: string;
    title?: string;
  },
}

function ServiceCard({
  className,
  title,
  keywords,
  href,
  buttonText,
  image,
}: ServiceCardProps) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} variant={'outlined'}>
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
            className={classes.subMargin}
            variant={'h5'}
            component={'h2'}
            gutterBottom
          >
            {title}
          </Typography>
        )}
        {keywords && keywords.map((keyword: string) => (
          <Typography
            className={classes.subMargin}
            variant={'body1'}
            gutterBottom
            key={keyword}
          >
            {keyword}
          </Typography>
        ))}
        {href && (
          <Button
            variant={'outlined'}
            component={RouterLink}
            to={href}
            color={'primary'}
          >
            {buttonText || '시작하기'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
