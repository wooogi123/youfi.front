import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardActions,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { RentHouseProduct, RentHouseOption } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    title: {
      marginLeft: theme.spacing(1),
    },
    subMargin: {
      marginBottom: theme.spacing(1),
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

interface RentHouseCardProps {
  product: RentHouseProduct;
  options: RentHouseOption[];
}

function RentHouseCard({
  product,
  options,
}: RentHouseCardProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function onClickExpanded() {
    setExpanded(!expanded);
  }

  return (
    <Card
      className={classes.root}
      variant={'outlined'}
    >
      <CardActions
        onClick={onClickExpanded}
        disableSpacing
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
          >
            {product.productName}
          </Typography>
        </div>
        <IconButton
          className={clsx(classes.expanded, {
            [classes.expandedOpen]: expanded,
          })}
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
          {options && (
            <TableContainer className={classes.table} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>대출상환유형</TableCell>
                    <TableCell>대출금리유형</TableCell>
                    <TableCell>최저 대출금리</TableCell>
                    <TableCell>최대 대출금리</TableCell>
                    <TableCell>전월 취급 평균금리</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {options.map(({
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
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RentHouseCard;
