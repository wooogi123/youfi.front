import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
    },
  }));

function DepositCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <InputLabel>생년월일을 입력해주세요.</InputLabel>
        <TextField
          type={'date'}
          defaultValue={'2000-01-01'}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel>사용하시는 주 거래 은행을 선택해주세요.</InputLabel>
        <Select>
          <option value={'KB'}>국민</option>
        </Select>
        <InputLabel>예치기간과 금액을 기입해주세요.</InputLabel>
        <Select native>
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </Select>
        <TextField
          variant={'outlined'}
        />
      </CardContent>
    </Card>
  );
}

export default DepositCard;
