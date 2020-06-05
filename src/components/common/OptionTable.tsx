import React from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Option } from '../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'inherit',
    minWidth: 300,
    margin: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginLeft: -theme.spacing(2),
      marginRight: -theme.spacing(2),
    },
  },
  table: {
    minWidth: 300,
  },
}));

interface OptionTableProps {
  options: Option[];
}

function OptionTable({ options }: OptionTableProps) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} size={'small'}>
        <TableHead>
          <TableRow>
            <TableCell>저축 금리 유형명</TableCell>
            <TableCell>저축 기간 (개월)</TableCell>
            <TableCell>저축 금리 (소수점 두자리)</TableCell>
            <TableCell>최고 우대금리 (소수점 두자리)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {options.map((el) => (
            <TableRow key={el.id}>
              <TableCell>{el.interestRateTypeName}</TableCell>
              <TableCell>{el.saveTerm}</TableCell>
              <TableCell>{(el.interestRate as number) / 100}</TableCell>
              <TableCell>{(el.interestRate2 as number) / 100}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OptionTable;
