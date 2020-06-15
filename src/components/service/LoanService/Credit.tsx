import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import {
  CreditProduct,
  CreditOption,
} from '../../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  subMargin: {
    marginBottom: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

interface CreditProps {
  value: number;
  index: number;
  products: CreditProduct[];
  options: CreditOption[];
}

function Credit({
  value,
  index,
  products,
  options,
}: CreditProps) {
  const classes = useStyles();

  return (
    <div hidden={value !== index}>
      {products.map((product: CreditProduct) => (
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
              {product.creditProductTypeName}
            </Typography>
            {product.creditBureauName && (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                gutterBottom
              >
                {`신용조회회사 - ${product.creditBureauName.replace(',', ', ')}`}
              </Typography>
            )}
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

export default Credit;
