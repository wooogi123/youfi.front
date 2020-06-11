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

interface Content {
  key: string;
  content: string | number;
}

interface OptionContent {
  contentId: number;
  data: Content[];
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
            {heads.map((el: string) => (
              <TableCell key={el}>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map(({ contentId, data }: OptionContent) => (
            <TableRow key={contentId}>
              {data.map(({ key, content }: Content) => (
                <TableCell key={key}>{content}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OptionsTable;
