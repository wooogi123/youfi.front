import React, { ChangeEvent, SetStateAction } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Tabs,
  Tab,
} from '@material-ui/core';
import clsx from 'clsx';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
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
  setTab: React.Dispatch<React.SetStateAction<number>>;
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void;
}

function LoanService({
  rentHouses,
  credits,
  isSearch,
  search,
  onChangeSearch,
  tab,
  setTab,
  onChangeTab,
}: LoanServiceProps) {
  const classes = useStyles();

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged: (s) => {
      setTab(s.details().relativeSlide);
    },
  });

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
            onClick={() => {
              setTab(0);
              slider.moveToSlideRelative(0);
            }}
          />
          <Tab
            label={'개인 신용대출'}
            id={'full-width-tab-1'}
            onClick={() => {
              setTab(1);
              slider.moveToSlideRelative(1);
            }}
          />
        </Tabs>
        <div ref={sliderRef} className={clsx(classes.card, 'keen-slider')}>
          <RentHouse
            className={'keen-slider__slide'}
            products={rentHouses.products}
            options={rentHouses.options}
          />
          <Credit
            className={'keen-slider__slide'}
            products={credits.products}
            options={credits.options}
          />
        </div>
      </div>
    </Template>
  );
}

export default LoanService;
