import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Select,
  InputLabel,
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

function LoanCard() {
  const classes = useStyles();
  const [purpose, setPurpose] = useState(0);
  const [open, setOpen] = useState(false);

  function onChangePurpose(e: React.ChangeEvent<{ value: unknown }>) {
    setPurpose(e.target.value as number);
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
          목적을 선택해주세요.
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
