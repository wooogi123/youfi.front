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
import Template from './Template';
import { SearchProps } from '../common';
import { DepositProduct, DepositOption } from '../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
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

interface DepositServiceProps extends SearchProps {
  products: DepositProduct[];
  options: DepositOption[];
}

function DepositService({
  products,
  options,
  isSearch,
  search,
  onChangeSearch,
}: DepositServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'예금'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {products.map((product: DepositProduct) => (
          <Card
            className={classes.card}
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
              {options && (
                <TableContainer className={classes.table} component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>저축 금리 유형명</TableCell>
                        <TableCell>저축 기간 (개월)</TableCell>
                        <TableCell>저축 금리 (소수점 두자리)</TableCell>
                        <TableCell>최고 우대금리 (소수점 두자리)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {options.filter((option: DepositOption) =>
                        (option.productCode === product.productCode))
                        .sort((f, s) => (f.saveTerm - s.saveTerm))
                        .map((option: DepositOption) => (
                          <TableRow key={option.productCode + option.saveTerm}>
                            <TableCell>{option.interestName}</TableCell>
                            <TableCell>{option.saveTerm}</TableCell>
                            <TableCell>{option.interestRate}</TableCell>
                            <TableCell>{option.interestRate2}</TableCell>
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
    </Template>
  );
}

export default DepositService;
