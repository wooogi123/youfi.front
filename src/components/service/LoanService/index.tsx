import React, { ChangeEvent } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Tabs,
  Tab,
} from '@material-ui/core';
import SwipeableView from 'react-swipeable-views';
import Template from '../Template';
import { SearchProps } from '../../common';
import { RentHouseResult, CreditResult } from '../../../store';
import RentHouse from './RentHouse';
import Credit from './Credit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      marginTop: '2rem',
      width: '75%',
      minWidth: 300,
    },
    subMargin: {
      marginBottom: '0.5rem',
    },
    tabs: {
      backgroundColor: theme.palette.background.paper,
      width: '75%',
      minWidth: 300,
    },
  }));

interface LoanServiceProps extends SearchProps {
  rentHouses: RentHouseResult;
  credits: CreditResult;
  tab: number;
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void;
  onChangeIndex: (value: number) => void;
}

function LoanService({
  rentHouses,
  credits,
  isSearch,
  search,
  onChangeSearch,
  tab,
  onChangeTab,
  onChangeIndex,
}: LoanServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'대출'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        <Tabs
          className={classes.tabs}
          value={tab}
          indicatorColor={'primary'}
          textColor={'primary'}
          variant={'fullWidth'}
          onChange={onChangeTab}
        >
          <Tab
            label={'전세자금 대출'}
            id={'full-width-tab-0'}
          />
          <Tab
            label={'개인 신용대출'}
            id={'full-width-tab-1'}
          />
        </Tabs>
        <SwipeableView
          className={classes.tabs}
          index={tab}
          onChangeIndex={onChangeIndex}
        >
          <RentHouse
            value={tab}
            index={0}
            products={rentHouses.products}
            options={rentHouses.options}
          />
          <Credit
            value={tab}
            index={1}
            products={credits.products}
            options={credits.options}
          />
        </SwipeableView>
      </div>
    </Template>
  );
}

export default LoanService;
