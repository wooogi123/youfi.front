import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '80vh',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

function TitleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant={'outlined'}>
      <CardContent className={classes.cardContent}>
        <Typography
          variant={'h5'}
          component={'h2'}
          gutterBottom
        >
          You-Fi
        </Typography>
        <Typography
          variant={'body2'}
          gutterBottom
        >
          Youth(청년)에게 쉽고, 편하게 Financial(금융)을!
        </Typography>
        <Typography
          variant={'body2'}
          gutterBottom
        >
          고등교육 수료 후 사회에 진출하는
        </Typography>
        <Typography
          variant={'body2'}
          gutterBottom
        >
          20대 청년들의 67.8%가 금융 교육 부재 (2019 교육부 통계 기준)
        </Typography>
        <Typography
          variant={'body2'}
          gutterBottom
        >
          금융이 어려운 것은 여러분의 잘못이 아닙니다.
        </Typography>
        <Typography
          variant={'body2'}
          gutterBottom
        >
          You-Fi가 여러분의 빈자리를 채워드리겟습니다.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TitleCard;
