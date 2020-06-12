import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { OptionsTable } from '../../common';
import {
  RentHouseLoanProduct,
  RentHouseLoanOption,
} from '../../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  subMargin: {
    marginBottom: theme.spacing(1),
  },
  nested: {
    paddingLect: theme.spacing(4),
  },
}));

interface RentHouseProps {
  value: number;
  index: number;
  products: RentHouseLoanProduct[];
  options: RentHouseLoanOption[];
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
      {products.map((product: RentHouseLoanProduct) => (
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
              <OptionsTable
                heads={[
                  '대출상환유형',
                  '대출금리유형',
                  '최저 대출금리 (소수점 두자리)',
                  '최대 대출금리 (소수점 두자리)',
                  '전월 취급 평균금리 (소수점 두자리)',
                ]}
                contents={options.filter((option: RentHouseLoanOption) =>
                  (option.financialProductCode === product.financialProductCode))
                  .sort((f, s) => {
                    if (f.repaymentType === s.repaymentType) {
                      if (f.lendRateType === 'F') return -1;
                      return 1;
                    }
                    if (f.repaymentType === 'D') return -1;
                    return 1;
                  })
                  .map((el) => ({
                    contentId: el.id,
                    data: [
                      { key: `${el.id}-1`, content: el.repaymentTypeName },
                      { key: `${el.id}-2`, content: el.lendRateTypeName },
                      { key: `${el.id}-3`, content: el.lendRateMin / 100 },
                      { key: `${el.id}-4`, content: el.lendRateMax / 100 },
                      { key: `${el.id}-5`, content: el.lendRateAverage / 100 },
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

export default RentHouse;
