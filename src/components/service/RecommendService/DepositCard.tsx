import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  InputLabel,
  Select,
  TextField,
  FormControl,
  MenuItem,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '50%',
      minWidth: 300,
    },
    content: {
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

interface DepositCardProps {
  companys: [string, string][];
  saveTerms: number[];
}

function DepositCard({
  companys,
  saveTerms,
}: DepositCardProps) {
  const classes = useStyles();
  const [birthday, setBirthday] = useState('2000-01-01');
  const [bank, setBank] = useState('');
  const [date, setDate] = useState(6);
  const [money, setMoney] = useState('');
  const [openBank, setOpenBank] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  function onChangeBirthday(e: React.ChangeEvent<{ value: unknown }>) {
    setBirthday(e.target.value as string);
  }

  function onChangeBank(e: React.ChangeEvent<{ value: unknown }>) {
    setBank(e.target.value as string);
  }

  function onChangeDate(e: React.ChangeEvent<{ value: unknown }>) {
    setDate(e.target.value as number);
  }

  function onChangeMoney(e: React.ChangeEvent<{ value: unknown }>) {
    setMoney(e.target.value as string);
  }

  function onClick() {
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <FormControl className={classes.minSelect}>
          <TextField
            required
            error={birthday === ''}
            label={'생년월일'}
            type={'date'}
            value={birthday}
            onChange={onChangeBirthday}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <Button
          className={classes.button}
          variant={'outlined'}
          onClick={() => (setOpenBank(true))}
        >
          사용하시는 주 거래 은행을 선택해주세요.
        </Button>
        <FormControl className={classes.minSelect}>
          <InputLabel>은행</InputLabel>
          <Select
            required
            error={bank === ''}
            open={openBank}
            onClose={() => (setOpenBank(false))}
            onOpen={() => (setOpenBank(true))}
            value={bank}
            onChange={onChangeBank}
          >
            {companys.map((el) => (
              <MenuItem value={el[0]} key={el[0]}>{el[1]}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          variant={'outlined'}
          onClick={() => (setOpenDate(true))}
        >
          예치기간과 금액을 기입해주세요.
        </Button>
        <FormControl className={classes.minSelect}>
          <InputLabel>예치기간</InputLabel>
          <Select
            required
            error={date === 0}
            open={openDate}
            onClose={() => (setOpenDate(false))}
            onOpen={() => (setOpenDate(true))}
            value={date}
            onChange={onChangeDate}
          >
            {saveTerms.map((el) => (
              <MenuItem value={el} key={el}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.minSelect}>
          <TextField
            required
            error={money === ''}
            label={'예치 금액'}
            variant={'outlined'}
            value={money}
            onChange={onChangeMoney}
          />
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

export default DepositCard;