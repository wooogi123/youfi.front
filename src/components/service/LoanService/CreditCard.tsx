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
import {
  CreditProduct,
  CreditOption,
} from '../../../store';

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
      transition: theme.transitions.create('tramsform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandedOpen: {
      transform: 'rotate(180deg)',
    },
  }));

interface CreditCardProps {
  product: CreditProduct;
  options: CreditOption[];
}

function CreditCard({
  product,
  options,
}: CreditCardProps) {
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
            {`${product.productName} - ${product.creditProductTypeName}`}
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
          {product.creditBureauName && (
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              gutterBottom
            >
              {`신용조회회사 - ${product.creditBureauName.replace(/,/g, ',')}`}
            </Typography>
          )}
          {options && (
            <TableContainer className={classes.table} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>금리 구분</TableCell>
                    <TableCell>1 ~ 2 등급</TableCell>
                    <TableCell>3 ~ 4 등급</TableCell>
                    <TableCell>5 ~ 6 등급</TableCell>
                    <TableCell>7 ~ 8 등급</TableCell>
                    <TableCell>9 ~ 10 등급</TableCell>
                    <TableCell>평균 금리</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {options.map(({
                    companyCode,
                    productCode,
                    creditLendName,
                    creditGrade1,
                    creditGrade2,
                    creditGrade3,
                    creditGrade4,
                    creditGrade5,
                    creditGradeAverage,
                  }: CreditOption) => (
                    <TableRow key={companyCode + productCode + creditLendName}>
                      <TableCell>{creditLendName}</TableCell>
                      <TableCell>{`${creditGrade1}%`}</TableCell>
                      <TableCell>{`${creditGrade2}%`}</TableCell>
                      <TableCell>{`${creditGrade3}%`}</TableCell>
                      <TableCell>{`${creditGrade4}%`}</TableCell>
                      <TableCell>{`${creditGrade5}%`}</TableCell>
                      <TableCell>{`${creditGradeAverage}%`}</TableCell>
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
      </Collapse>
    </Card>
  );
}

export default CreditCard;
