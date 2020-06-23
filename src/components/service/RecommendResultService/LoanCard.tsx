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
import { RentHouseResult, RentHouseProduct } from '../../../store';

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
    subMarginTop: {
      marginTop: theme.spacing(4),
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

interface LoanCardProps {
  product: RentHouseProduct;
  rentHouses: RentHouseResult;
  money: string;
  date: number;
}

function LoanCard({
  product,
  rentHouses,
  money,
  date,
}: LoanCardProps) {
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
            gutterBottom
          >
            {product.loanIncidentalExpense}
          </Typography>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            gutterBottom
          >
            {product.earlyPrepaymentFee}
          </Typography>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            gutterBottom
          >
            {product.delayRate}
          </Typography>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            gutterBottom
          >
            {`대출 한도: ${product.loanLimit}`}
          </Typography>
          {rentHouses.options.filter((option) =>
            (option.productCode === product.productCode))
            .map((el) => (
              <>
                {el.repaymentName === '만기일시상환방식' && (
                  <div key={el.productCode + el.companyCode + el.repaymentName + el.lendRateName}>
                    <Typography
                      className={clsx(classes.subMargin, classes.subMarginTop)}
                      variant={'subtitle2'}
                      gutterBottom
                    >
                      {`- ${money}원을 ${date}년동안 ${el.lendRateName}으로 대출받을 시`}
                    </Typography>
                    <Typography
                      className={classes.subMargin}
                      variant={'subtitle2'}
                      gutterBottom
                    >
                      {`${el.repaymentName} 기준`}
                    </Typography>
                    {el.lendRateMin !== null && (
                      <Typography
                        className={classes.subMargin}
                        variant={'subtitle2'}
                        gutterBottom
                      >
                        {`최소금리 ${el.lendRateMin}% `}
                        {`기준 월 ${(Number(money) * (el.lendRateMin / 1200)).toFixed()}원 `}
                        {'총 '}
                        {(Number(money) * ((100 + el.lendRateMin * date) / 100)).toFixed()}
                        원을 상환해야합니다.
                      </Typography>
                    )}
                    {el.lendRateMax !== null && (
                      <Typography
                        className={classes.subMargin}
                        variant={'subtitle2'}
                        gutterBottom
                      >
                        {`최대금리 ${el.lendRateMax}% `}
                        {`기준 월 ${(Number(money) * (el.lendRateMin / 1200)).toFixed()}원 `}
                        {'총 '}
                        {(Number(money) * ((100 + el.lendRateMax * date) / 100)).toFixed()}
                        원을 상환해야합니다.
                      </Typography>
                    )}
                    {el.lendRateAverage !== null && (
                      <Typography
                        className={classes.subMargin}
                        variant={'subtitle2'}
                        gutterBottom
                      >
                        {`전월평균금리 ${el.lendRateAverage}% `}
                        {`기준 월 ${(Number(money) * (el.lendRateAverage / 1200)).toFixed()}원 `}
                        {'총 '}
                        {(Number(money) * ((100 + el.lendRateAverage * date) / 100)).toFixed()}
                        원을 상환해야합니다.
                      </Typography>
                    )}
                  </div>
                )}
              </>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default LoanCard;
