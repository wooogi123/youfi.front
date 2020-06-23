import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Button,
} from '@material-ui/core';
import {
  DepositProduct,
  SavingProduct,
  RentHouseProduct,
  RecommendContent,
} from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      widdth: '100%',
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

interface SpecialLoanProps {
  recommends: RecommendContent[];
  setResult: React.Dispatch<React.SetStateAction<Result>>;
  setOpenResult: React.Dispatch<React.SetStateAction<boolean>>;
}

function SpecialLoanCard({
  recommends,
  setResult,
  setOpenResult,
}: SpecialLoanProps) {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [region, setRegion] = useState('');
  const [openType, setOpenType] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);

  function onChangeType(e: React.ChangeEvent<{ value: unknown }>) {
    setType(e.target.value as number);
  }

  function onChangeRegion(e: React.ChangeEvent<{ value: unknown }>) {
    setRegion(e.target.value as string);
  }

  function onClick() {
    if (region !== '' && type !== 0) {
      if (region === 'all') {
        setResult({
          contents: recommends,
          type: 'recommend',
          recommend: 'loan',
          recommendType: type,
        });
      } else {
        setResult({
          contents: recommends.filter((recommend) =>
            (recommend.region === region)),
          type: 'recommend',
          recommend: 'loan',
          recommendType: type,
        });
      }
      setOpenResult(true);
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Button
          className={classes.button}
          variant={'outlined'}
          onClick={() => (setOpenType(true))}
        >
          대출 목적을 선택해주세요.
        </Button>
        <FormControl className={classes.minSelect}>
          <InputLabel>대출 목적</InputLabel>
          <Select
            required
            error={type === 0}
            open={openType}
            onClose={() => (setOpenType(false))}
            onOpen={() => (setOpenType(true))}
            value={type}
            onChange={onChangeType}
          >
            <MenuItem value={0} disabled />
            <MenuItem value={1}>전체</MenuItem>
            <MenuItem value={2}>청년 전월세, 보증금 대출</MenuItem>
            <MenuItem value={3}>청년 생활비 대출</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          variant={'outlined'}
          onClick={() => (setOpenRegion(true))}
        >
          주민등록 상 거주 지역을 선택해주세요.
        </Button>
        <FormControl className={classes.minSelect}>
          <InputLabel>지역</InputLabel>
          <Select
            required
            error={region === ''}
            open={openRegion}
            onClose={() => (setOpenRegion(false))}
            onOpen={() => (setOpenRegion(true))}
            value={region}
            onChange={onChangeRegion}
          >
            <MenuItem value={'all'}>전체</MenuItem>
            <MenuItem value={'서울'}>서울</MenuItem>
            <MenuItem value={'경기'}>경기</MenuItem>
            <MenuItem value={'강원'}>강원</MenuItem>
            <MenuItem value={'충북'}>충북</MenuItem>
            <MenuItem value={'충남'}>충남</MenuItem>
            <MenuItem value={'경북'}>경북</MenuItem>
            <MenuItem value={'경남'}>경남</MenuItem>
            <MenuItem value={'전북'}>전북</MenuItem>
            <MenuItem value={'전남'}>전남</MenuItem>
            <MenuItem value={'제주'}>제주</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          variant={'outlined'}
          color={'primary'}
          onClick={onClick}
        >
          추천받기
        </Button>
      </CardContent>
    </Card>
  );
}

export default SpecialLoanCard;
