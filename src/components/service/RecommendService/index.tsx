import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@material-ui/core';
import Template from '../Template';
import DepositCard from './DepositCard';
import SavingCard from './SavingCard';
import LoanCard from './LoanCard';
import SpecialDeposit from './SpecialDepositCard';
import SpecialLoan from './SpecialLoanCard';
import SpecialOther from './SpecialOtherCard';
import {
  DepositResult,
  DepositProduct,
  SavingResult,
  SavingProduct,
  RentHouseResult,
  RentHouseProduct,
  RecommendContent,
} from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      fontSize: '1rem',
      marginTop: theme.spacing(2),
    },
    minSelect: {
      minWidth: 268,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

interface Result {
  contents: DepositProduct[] | SavingProduct[] | RentHouseProduct[] | RecommendContent[];
  type: 'deposit' | 'saving' | 'rentHouse' | 'recommend' | '';
  money?: string;
  date?: number;
  recommend?: string;
  recommendType?: number;
}

interface RecommendServiceProps {
  deposits: DepositResult;
  savings: SavingResult;
  rentHouses: RentHouseResult;
  recommends: RecommendContent[];
  setResult: React.Dispatch<React.SetStateAction<Result>>;
  setOpenResult: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecommendService({
  deposits,
  savings,
  rentHouses,
  recommends,
  setResult,
  setOpenResult,
}: RecommendServiceProps) {
  const classes = useStyles();
  const [choice, setChoice] = useState(0);
  const [open, setOpen] = useState(false);

  function uniqBy(value: [string, string][]) {
    return [...new Map(value.map((x) =>
      ([JSON.stringify(x), x])))
      .values()];
  }

  function onChangeChoice(e: React.ChangeEvent<{ value: unknown }>) {
    setChoice(+(e.target.value as number));
  }

  return (
    <Template
      title={'맞춤 금융상품'}
      isSearch={false}
    >
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Button
              className={classes.button}
              variant={'outlined'}
              onClick={() => (setOpen(true))}
            >
              어떤 종류의 상품을 추천받으시겠습니까?
            </Button>
            <FormControl className={classes.minSelect}>
              <InputLabel id={'recommend-choice-label'}>추천 상품</InputLabel>
              <Select
                labelId={'recommend-choice-label'}
                open={open}
                onClose={() => (setOpen(false))}
                onOpen={() => (setOpen(true))}
                value={choice}
                onChange={onChangeChoice}
              >
                <MenuItem value={0} disabled />
                <MenuItem value={1}>예금</MenuItem>
                <MenuItem value={2}>적금</MenuItem>
                <MenuItem value={3}>전세자금 대출</MenuItem>
                <MenuItem value={4}>청년 저축상품 (저축지원, 주택청약)</MenuItem>
                <MenuItem value={5}>청년 대출상품 (생활비, 전월세 보증금 대출)</MenuItem>
                <MenuItem value={6}>청년 부가 지원상품 (이자 지원, 신용회복, 청년 기본소득 등)</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
        {choice === 1 && (
          <DepositCard
            deposits={deposits.products}
            setResult={setResult}
            companys={uniqBy(deposits.products
              .map((product) =>
                ([product.companyCode, product.companyName])))}
            saveTerms={[
              6, 12, 24, 36,
            ]}
            setOpenResult={setOpenResult}
          />
        )}
        {choice === 2 && (
          <SavingCard
            savings={savings.products}
            setResult={setResult}
            companys={uniqBy(savings.products
              .map((product) =>
                ([product.companyCode, product.companyName])))}
            saveTerms={[
              6, 12, 24, 36,
            ]}
            setOpenResult={setOpenResult}
          />
        )}
        {choice === 3 && (
          <LoanCard
            rentHouses={rentHouses.products}
            setResult={setResult}
            companys={uniqBy(rentHouses.products
              .map((product) =>
                ([product.companyCode, product.companyName])))}
            terms={[
              1, 2, 3,
            ]}
            setOpenResult={setOpenResult}
          />
        )}
        {choice === 4 && (
          <SpecialDeposit
            recommends={recommends}
            setResult={setResult}
            setOpenResult={setOpenResult}
          />
        )}
        {choice === 5 && (
          <SpecialLoan
            recommends={recommends}
            setResult={setResult}
            setOpenResult={setOpenResult}
          />
        )}
        {choice === 6 && (
          <SpecialOther
            recommends={recommends}
            setResult={setResult}
            setOpenResult={setOpenResult}
          />
        )}
      </div>
    </Template>
  );
}

export default RecommendService;
