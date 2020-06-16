import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import {
  RentHouseProduct,
  RentHouseOption,
} from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    subMargin: {
      marginBottom: theme.spacing(1),
    },
    nested: {
      paddingLect: theme.spacing(4),
    },
    table: {
      width: 'inherit',
      minWidth: 300,
      margin: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginLeft: -theme.spacing(2),
        marginRight: -theme.spacing(2),
      },
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
            {options && (
              <TableContainer className={classes.table} component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>대출상환유형</TableCell>
                      <TableCell>대출금리유형</TableCell>
                      <TableCell>최저 대출금리 (소수점 두자리)</TableCell>
                      <TableCell>최대 대출금리 (소수점 두자리)</TableCell>
                      <TableCell>전월 취급 평균금리 (소수점 두자리)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {options.filter((option: RentHouseOption) =>
                      (option.productCode === product.productCode))
                      .sort((f, s) =>
                        (f.repaymentName.length - s.repaymentName.length))
                      .map(({
                        companyCode,
                        productCode,
                        repaymentName,
                        lendRateName,
                        lendRateMin,
                        lendRateMax,
                        lendRateAverage,
                      }: RentHouseOption) => (
                        <TableRow key={companyCode + productCode + repaymentName + lendRateName}>
                          <TableCell>{repaymentName}</TableCell>
                          <TableCell>{lendRateName}</TableCell>
                          <TableCell>{lendRateMin}</TableCell>
                          <TableCell>{lendRateMax}</TableCell>
                          <TableCell>{lendRateAverage}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
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
