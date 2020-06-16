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
  CreditProduct,
  CreditOption,
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
          key={product.companyCode + product.productCode + product.productName}
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
            {options.filter((option: CreditOption) =>
              (option.creditProductType === product.creditProductType))
              .filter((option: CreditOption) =>
                (option.companyCode === product.companyCode)) && (
                <TableContainer className={classes.table} component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>금리 구분</TableCell>
                        <TableCell>신용 1 ~ 2 등급 (소수점 두자리)</TableCell>
                        <TableCell>신용 3 ~ 4 등급 (소수점 두자리)</TableCell>
                        <TableCell>신용 5 ~ 6 등급 (소수점 두자리)</TableCell>
                        <TableCell>신용 7 ~ 8 등급 (소수점 두자리)</TableCell>
                        <TableCell>신용 9 ~ 10 등급 (소수점 두자리)</TableCell>
                        <TableCell>평균 금리 (소수점 두자리)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {options.filter((option: CreditOption) =>
                        (option.creditProductType === product.creditProductType))
                        .filter((option: CreditOption) =>
                          (option.companyCode === product.companyCode))
                        .sort((f, s) =>
                          (f.creditLendName.length - s.creditLendName.length))
                        .map(({
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
                            <TableCell>{creditGrade1}</TableCell>
                            <TableCell>{creditGrade2}</TableCell>
                            <TableCell>{creditGrade3}</TableCell>
                            <TableCell>{creditGrade4}</TableCell>
                            <TableCell>{creditGrade5}</TableCell>
                            <TableCell>{creditGradeAverage}</TableCell>
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

export default Credit;
