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

interface OptionContent {
  id: number;
  data: {
    key: string;
    content: (string | number);
  }[];
}

interface OptionsTableProps {
  heads: string[];
  contents: OptionContent[];
}

function OptionsTable({ heads, contents }: OptionsTableProps) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} size={'small'}>
        <TableHead>
          <TableRow>
            {heads.map((el) => (
              <TableCell key={el}>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map((content) => (
            <TableRow key={content.id}>
              {content.data.map((el) => (
                <TableCell key={el.key}>{el}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OptionsTable;
