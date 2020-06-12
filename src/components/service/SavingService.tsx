import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import Template from './Template';
import { SearchProps, OptionsTable } from '../common';
import { SavingProduct, SavingOption } from '../../store';

const useStyles = makeStyles((theme) => ({
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
}));

interface SavingServiceProps extends SearchProps {
  products: SavingProduct[];
  options: SavingOption[];
}

function SavingService({
  products,
  options,
  isSearch,
  search,
  onChangeSearch,
}: SavingServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'예금'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {products.map((product: SavingProduct) => (
          <Card
            className={classes.card}
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
              {product.specialCondition
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
                <OptionsTable
                  heads={[
                    '저축 금리 유형명',
                    '적립 유형명',
                    '저축 기간 (개월)',
                    '저축 금리 (소수점 두자리)',
                    '최고 우대금리 (소수점 두자리)',
                  ]}
                  contents={options.filter((option: SavingOption) =>
                    (option.financialProductCode === product.financialProductCode))
                    .sort((f, s) => {
                      if (f.savingType === s.savingType) return f.saveTerm - s.saveTerm;
                      if (f.savingType === 'F') return -1;
                      return 1;
                    })
                    .map((el) => ({
                      contentId: el.id,
                      data: [
                        { key: `${el.id}-1`, content: el.interestRateTypeName },
                        { key: `${el.id}-2`, content: el.savingTypeName },
                        { key: `${el.id}-3`, content: el.saveTerm },
                        { key: `${el.id}-4`, content: el.interestRate / 100 },
                        { key: `${el.id}-5`, content: el.interestRate2 / 100 },
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
    </Template>
  );
}

export default SavingService;
