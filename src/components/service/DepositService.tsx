import React from 'react';
import { makeStyles } from '@material-ui/core';
import Template from './Template';
import { SearchProps, DepositCard } from '../common';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface Response {
  [key: string]: string;
}

interface Deposits<T, U> {
  base: T;
  options: U[];
}

interface DepositServiceProps extends SearchProps {
  contents: Deposits<Response, Response>[];
}

function DepositService({
  contents, isSearch, search, onChangeSearch,
}: DepositServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'예금'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {contents.map((deposit: Deposits<Response, Response>) => (
          <DepositCard
            bankName={deposit.base.kor_co_nm}
            title={deposit.base.fin_prdt_nm}
            joinWay={deposit.base.join_way}
            joinMember={deposit.base.join_member}
            maturityAfterInterest={deposit.base.mtrt_int}
            special={deposit.base.spcl_cnd}
            comment={deposit.base.etc_note}
            maxLimit={deposit.base.max_limit}
            startDate={deposit.base.dcls_strt_day}
            endDate={deposit.base.dcls_end_day}
            options={deposit.options}
            key={deposit.base.fin_prdt_nm}
          />
        ))}
      </div>
    </Template>
  );
}

export default DepositService;
