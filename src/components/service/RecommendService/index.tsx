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
      alignItems: 'start',
    },
    minSelect: {
      minWidth: 268,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

function RecommendService() {
  const classes = useStyles();
  const [choice, setChoice] = useState(0);
  const [open, setOpen] = useState(false);

  function onChangeChoice(e: React.ChangeEvent<{ value: unknown }>) {
    setChoice(+(e.target.value as number));
  }

  function onClickOpen() {
    setOpen(true);
  }

  function onClickClose() {
    setOpen(false);
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
              className={classes.minSelect}
              onClick={onClickOpen}
            >
              어떤 종류의 상품을 추천받으시겠습니까?
            </Button>
            <FormControl className={classes.minSelect}>
              <InputLabel id={'recommend-choice-label'}>추천 상품</InputLabel>
              <Select
                labelId={'recommend-choice-label'}
                open={open}
                onClose={onClickClose}
                onOpen={onClickOpen}
                value={choice}
                onChange={onChangeChoice}
              >
                <MenuItem value={0} disabled />
                <MenuItem value={1}>예금</MenuItem>
                <MenuItem value={2}>적금</MenuItem>
                <MenuItem value={3}>청년 대출상품 (만 15세 ~ 34세)</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
        {choice === 1 && (<DepositCard />)}
        {choice === 2 && (<SavingCard />)}
        {choice === 3 && (<LoanCard />)}
      </div>
    </Template>
  );
}

export default RecommendService;
