import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Option } from '../../store';
import OptionTable from './OptionTable';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    width: '75%',
    minWidth: 300,
  },
  subMargin: {
    marginBottom: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

interface DepositCardProps {
  bankName: string;
  title: string;
  joinWay: string;
  maturityAfterInterest: string;
  special: string;
  joinMember: string;
  comment?: string;
  maxLimit?: number;
  startDate: Date;
  endDate?: Date;
  options?: Option[];
}

function DepositCard({
  bankName,
  title,
  joinWay,
  joinMember,
  maturityAfterInterest,
  special,
  comment,
  maxLimit,
  startDate,
  endDate,
  options,
}: DepositCardProps) {
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
          {bankName}
        </Typography>
        <Typography
          variant={'h5'}
          component={'h2'}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          color={'textSecondary'}
          gutterBottom
        >
          {joinWay.split(',').join(', ')}
        </Typography>
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          color={'textSecondary'}
          gutterBottom
        >
          {joinMember}
        </Typography>
        {maturityAfterInterest.split('\n').map((el, idx) => (
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            component={'p'}
            gutterBottom
            key={el + el[idx] + el[el.length - idx]}
          >
            {el}
          </Typography>
        ))}
        {special.split('\n').map((el, idx) => (
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            component={'p'}
            gutterBottom
            key={el + el[idx] + el[el.length - idx]}
          >
            {el}
          </Typography>
        ))}
        {comment && comment.split('\n').map((el, idx) => (
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            component={'p'}
            gutterBottom
            key={el + el[idx] + el[el.length - idx]}
          >
            {el}
          </Typography>
        ))}
        {maxLimit && (
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            gutterBottom
          >
            {`최고 한도 - ${maxLimit}원`}
          </Typography>
        )}
        {options && (
          <OptionTable options={options} />
        )}
        <Typography
          className={classes.subMargin}
          variant={'subtitle2'}
          gutterBottom
        >
          {`공시 시작일 - ${startDate}`}
        </Typography>
        {endDate && (
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            gutterBottom
          >
            {`공시 종료일 - ${endDate}`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default DepositCard;
