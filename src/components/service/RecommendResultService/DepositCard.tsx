import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardActions,
  CardContent,
  Typography,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { DepositResult, DepositProduct } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      marginLeft: theme.spacing(1),
    },
    subMargin: {
      marginBottom: theme.spacing(1),
    },
    expanded: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandedOpen: {
      transform: 'rotate(180deg)',
    },
  }));

interface DepositCardProps {
  product: DepositProduct;
  deposits: DepositResult;
  money: string;
  date: number;
}

function DepositCard({
  product,
  deposits,
  money,
  date,
}: DepositCardProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className={classes.root}
      variant={'outlined'}
    >
      <CardActions
        className={classes.actions}
        onClick={() => (setExpanded(!expanded))}
      >
        <div className={classes.title}>
          <Typography
            variant={'subtitle2'}
            color={'textSecondary'}
            gutterBottom
          >
            {product.companyName}
          </Typography>
          <Typography
            variant={'h5'}
            component={'h2'}
            gutterBottom
          >
            {product.productName}
          </Typography>
          {deposits.options.filter((option) =>
            (option.productCode === product.productCode))
            .map((el) => (
              <div key={el.productCode + el.companyCode + el.saveTerm}>
                <Typography
                  variant={'subtitle2'}
                  hidden={(el.saveTerm !== date)}
                  gutterBottom
                >
                  {`- ${money}원을 ${el.saveTerm}개월 예치시 예상 금액`}
                </Typography>
                <Typography
                  variant={'subtitle2'}
                  hidden={(el.saveTerm !== date)}
                  gutterBottom
                >
                  {`${(Number(money) * (1 + el.interestRate2 * ((date as number) / 12))).toFixed()}원`}
                </Typography>
              </div>
            ))}
        </div>
        <IconButton
          className={clsx(classes.expanded, {
            [classes.expandedOpen]: expanded,
          })}
          aria-expanded={expanded}
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout={'auto'} unmountOnExit>
        <CardContent>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            color={'textSecondary'}
            gutterBottom
          >
            {product.joinWay.replace(/,/g, ', ')}
          </Typography>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            color={'textSecondary'}
            gutterBottom
          >
            {product.joinMember}
          </Typography>
          {product.maturityAfterInterest
            .split('\n')
            .map((el: string) => (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
                key={el}
              >
                {el}
              </Typography>
            ))}
          {product.special
            .split('\n')
            .map((el: string) => (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
                key={el}
              >
                {el}
              </Typography>
            ))}
          {product.comment && product.comment
            .split('\n')
            .map((el: string) => (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
                key={el}
              >
                {el}
              </Typography>
            ))}
          {product.maxLimit && (
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              gutterBottom
            >
              {`최고 한도 - ${product.maxLimit}원`}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default DepositCard;
