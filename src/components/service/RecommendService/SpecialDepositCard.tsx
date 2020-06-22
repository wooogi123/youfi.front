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

function SpecialDepositCard() {
  const classes = useStyles();
  const [region, setRegion] = useState('');
  const [openRegion, setOpenRegion] = useState(false);

  function onChangeRegion(e: React.ChangeEvent<{ value: unknown }>) {
    setRegion(e.target.value as string);
  }

  function onClick() {}

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
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

export default SpecialDepositCard;
