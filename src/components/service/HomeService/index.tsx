import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Template from '../Template';
import ServiceCard from './ServiceCard';
import TitleCard from './TitleCard';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    pagination: {
      marginTop: theme.spacing(2),
    },
  }));

interface HomeServiceProps {
  index: number;
  onChangeIndex: (value: number) => void;
  onChangePage: (event: object, page: number) => void;
}

function HomeService({
  index,
  onChangeIndex,
  onChangePage,
}: HomeServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'You-Fi'}
      isSearch={false}
    >
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={onChangeIndex}
          interval={5000}
        >
          <TitleCard />
          <ServiceCard
            keywords={[
              '금융 상품을 빠르고 쉽게!',
              '당신에게 맞는 맞춤 금융상품을 추천해줍니다!',
              '- 맞춤 금융상품 추천 -',
            ]}
            href={'/service/recommend'}
          />
          <ServiceCard
            keywords={[
              '금융지식이 필요할 때!',
              '금융 상품 이해가 안될 때!',
              '- 금융 지식 사전 -',
            ]}
            href={'/service/dict'}
          />
          <ServiceCard
            keywords={[
              '재테크의 첫걸음!',
              '저축을 위한 예금 상품!',
              '- 예금 상품 목록 -',
            ]}
            href={'/service/deposit'}
          />
          <ServiceCard
            keywords={[
              '큰 목돈 마련을 위한 시작!',
              '은행, 금리, 우대조건을 한눈에!',
              '- 적금 상품 목록 -',
            ]}
            href={'/service/saving'}
          />
          <ServiceCard
            keywords={[
              '전세금 마련을 도와줄 전세대출!',
              '급전 마련을 위한 신용대출!',
              '- 대출 상품 목록 -',
            ]}
            href={'/service/loan'}
          />
        </AutoPlaySwipeableViews>
        <Pagination
          className={classes.pagination}
          count={6}
          page={index + 1}
          onChange={onChangePage}
          hidePrevButton
          hideNextButton
        />
      </div>
    </Template>
  );
}

export default HomeService;
