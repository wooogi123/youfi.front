import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  InputLabel,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
    },
  }));

function LoanCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <InputLabel>대출 목적을 선택해주세요.</InputLabel>
        <Select>
          <option>전세자금</option>
          <option>보증부월세 (보증금 + 월세)</option>
          <option>주거안정 (생활비)</option>
        </Select>
        <InputLabel>현재 중소, 중견기업에 재직 중 이십니까?</InputLabel>
        <RadioGroup row>
          <FormControlLabel
            value={'Y'}
            control={<Radio color={'primary'} />}
            label={'예'}
          />
          <FormControlLabel
            value={'N'}
            control={<Radio color={'primary'} />}
            label={'아니요'}
          />
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

export default LoanCard;
