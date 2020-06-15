import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import {
  RentHouseProduct,
  RentHouseOption,
} from '../../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  subMargin: {
    marginBottom: theme.spacing(1),
  },
  nested: {
    paddingLect: theme.spacing(4),
  },
}));

interface RentHouseProps {
  value: number;
  index: number;
  products: RentHouseProduct[];
  options: RentHouseOption[];
}

function RentHouse({
  value,
  index,
  products,
  options,
}: RentHouseProps) {
  const classes = useStyles();

  return (
    <div hidden={value !== index}>
      {products.map((product: RentHouseProduct) => (
        <Card
          className={classes.root}
          variant={'outlined'}
          key={product.productName}
        >
          <CardContent>
            <Typography
              className={classes.subMargin}
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
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              color={'textSecondary'}
              gutterBottom
            >
              {product.joinWay.replace(',', ', ')}
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
            {options && (null)}
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              gutterBottom
            >
              {`공시 시작일 - ${product.startDate}`}
            </Typography>
            {product.endDate && (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                gutterBottom
              >
                {`공시 종료일 - ${product.endDate}`}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default RentHouse;
