import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { OptionsTable } from '../../common';
import {
  CreditLoanProduct,
  CreditLoanOption,
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
  products: CreditLoanProduct[];
  options: CreditLoanOption[];
}

function Credit({
  value,
  index,
  products,
  options,
}: CreditProps) {
  const classes = useStyles();

  function filteredOption(
    product: CreditLoanProduct,
  ): CreditLoanOption[] {
    return options.filter((option: CreditLoanOption) =>
      (option.creditProductType === product.creditProductType))
      .filter((option: CreditLoanOption) =>
        (option.financialCompanyCode === product.financialCompanyCode))
      .sort((f, s) => {
        if (f.creditLendRateType !== 'A') {
          if (f.creditLendRateType === 'B') {
            if (s.creditLendRateType === 'A') return 1;
            return -1;
          }
          if (f.creditLendRateType === 'C') {
            if (s.creditLendRateType === 'A') return 1;
            if (s.creditLendRateType === 'B') return 1;
            return -1;
          }
          if (f.creditLendRateType === 'D') {
            if (s.creditLendRateType === 'A') return 1;
            if (s.creditLendRateType === 'B') return 1;
            if (s.creditLendRateType === 'C') return 1;
            return -1;
          }
          if (f.creditLendRateType === 'E') {
            if (s.creditLendRateType === 'A') return 1;
            if (s.creditLendRateType === 'B') return 1;
            if (s.creditLendRateType === 'C') return 1;
            if (s.creditLendRateType === 'D') return 1;
            return -1;
          }
          return -1;
        }
        return -1;
      });
  }

  return (
    <div hidden={value !== index}>
      {products.map((product: CreditLoanProduct) => (
        <Card
          className={classes.root}
          variant={'outlined'}
          key={product.id}
        >
          <CardContent>
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              color={'textSecondary'}
              gutterBottom
            >
              {product.financialCompanyName}
            </Typography>
            <Typography
              variant={'h5'}
              component={'h2'}
              gutterBottom
            >
              {product.financialProductName}
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
            {options && (
              <OptionsTable
                heads={[
                  '금리 구분',
                  '은행: 1 ~ 2등급, 비은행: 1 ~ 3등급 (소수점 두자리)',
                  '은행: 3 ~ 4등급, 비은행: 4등급 (소수점 두자리)',
                  '은행: 5 ~ 6등급, 비은행: 5등급 (소수점 두자리)',
                  '은행: 7 ~ 8등급, 비은행: 6등급 (소수점 두자리)',
                  '은행: 9 ~ 10등급, 비은행: 7 ~ 10등급 (소수점 두자리)',
                  '평균 금리 (소수점 두자리)',
                ]}
                contents={filteredOption(product).map((el) => ({
                  contentId: el.id,
                  data: [
                    { key: `${el.id}-1`, content: el.creditLendRateTypeName },
                    { key: `${el.id}-2`, content: el.creditGrade1 / 100 },
                    { key: `${el.id}-3`, content: el.creditGrade2 / 100 },
                    { key: `${el.id}-4`, content: el.creditGrade3 / 100 },
                    { key: `${el.id}-5`, content: el.creditGrade4 / 100 },
                    { key: `${el.id}-6`, content: el.creditGrade5 / 100 },
                    { key: `${el.id}-7`, content: el.creditGradeAverage / 100 },
                  ],
                }))}
                key={product.id}
              />
            )}
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              gutterBottom
            >
              {`공시 시작일 - ${product.disclosureStartDay}`}
            </Typography>
            {product.disclosureEndDay && (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                gutterBottom
              >
                {`공시 종료일 - ${product.disclosureEndDay}`}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Credit;
