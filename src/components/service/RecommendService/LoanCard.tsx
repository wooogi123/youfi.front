import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Select,
  InputLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
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

function LoanCard() {
  const classes = useStyles();
  const [purpose, setPurpose] = useState(0);
  const [open, setOpen] = useState(false);
  const [work, setWork] = useState<'' | 'Y' | 'N'>('');

  function onChangePurpose(e: React.ChangeEvent<{ value: unknown }>) {
    setPurpose(e.target.value as number);
  }

  function onChangeWork(e: React.ChangeEvent<{ value: unknown }>) {
    setWork(e.target.value as '' | 'Y' | 'N');
  }

  function onClick() {
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Button
          className={classes.button}
          variant={'outlined'}
          onClick={() => (setOpen(true))}
        >
          대출 목적을 선택해주세요.
        </Button>
        <FormControl className={classes.minSelect}>
          <InputLabel>목적</InputLabel>
          <Select
            required
            error={purpose === 0}
            open={open}
            onClose={() => (setOpen(false))}
            onOpen={() => (setOpen(true))}
            value={purpose}
            onChange={onChangePurpose}
          >
            <MenuItem value={0} disabled />
            <MenuItem value={1}>전세자금</MenuItem>
            <MenuItem value={2}>보증부월세 (보증금 + 월세)</MenuItem>
            <MenuItem value={3}>주거안정 (생활비)</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          variant={'outlined'}
        >
          현재 중소, 중견기업에 재직 중 이십니까?
        </Button>
        <FormControl>
          <RadioGroup
            row
            value={work}
            onChange={onChangeWork}
          >
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

export default LoanCard;
