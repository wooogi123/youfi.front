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
import { SavingProduct, SavingOption } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
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

interface SavingCardProps {
  product: SavingProduct;
  options: SavingOption[];
}

function SavingCard({
  product,
  options,
}: SavingCardProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function onClickExpanded() {
    setExpanded(!expanded);
  }

  return (
    <Card
      className={classes.root}
      variant={'outlined'}
      key={product.productName}
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
                    <TableCell>적립 유형명</TableCell>
                    <TableCell>저축 기간</TableCell>
                    <TableCell>저축 금리</TableCell>
                    <TableCell>최고 우대금리</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {options.map((option: SavingOption) => (
                    <TableRow key={option.productCode + option.savingName + option.saveTerm}>
                      <TableCell>{option.interestName}</TableCell>
                      <TableCell>{option.savingName}</TableCell>
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
      </Collapse>
    </Card>
  );
}

export default SavingCard;
