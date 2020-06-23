import React, {
  useRef,
  useEffect,
} from 'react';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import Template from '../Template';
import ServiceCard from './ServiceCard';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    slide: {
      width: '100vw',
    },
    dots: {
      display: 'flex',
      padding: '0.75rem 0',
      justifyContent: 'center',
    },
    dot: {
      border: 'none',
      width: '0.75rem',
      height: '0.75rem',
      background: '#c5c5c5',
      borderRadius: '50%',
      margin: '0 5px',
      padding: 5,
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
    },
    dotActivated: {
      background: '#000000',
    },
  }));

interface HomeServiceProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
}

function HomeService({
  currentSlide,
  setCurrentSlide,
  pause,
  setPause,
}: HomeServiceProps) {
  const classes = useStyles();

  const timer = useRef<number>();
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slideChanged: (s) => {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    sliderRef.current?.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current?.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef, setPause]);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Template
      title={'You-Fi'}
      isSearch={false}
    >
      <div className={classes.root}>
        <div ref={sliderRef} className={clsx(classes.slide, 'keen-slider')}>
          <ServiceCard
            className={'keen-slider__slide'}
            title={'You-Fi'}
            keywords={[
              'Youth(청년)에게 쉽고, 편하게 Financial(금융)을!',
              '고등교육 수료 후 사회에 진출하는',
              '20대 청년들의 67.8%가 금융 교육 부재 (2019 교육부 통계 기준)',
              '금융이 어려운 것은 여러분의 잘못이 아닙니다.',
              'You-Fi가 여러분의 빈자리를 채워드리겟습니다.',
            ]}
            image={{
              href: '/static/images/mainman.png',
              title: 'Main Man Image',
            }}
          />
          <ServiceCard
            className={'keen-slider__slide'}
            keywords={[
              '금융 상품을 빠르고 쉽게!',
              '당신에게 맞는 맞춤 금융상품을 추천해줍니다!',
            ]}
            buttonText={'- 맞춤 금융상품 -'}
            href={'/service/recommend'}
            image={{
              href: '/static/images/recommend.png',
              title: 'Recommend Title',
            }}
          />
          <ServiceCard
            className={'keen-slider__slide'}
            keywords={[
              '금융지식이 필요할 때!',
              '금융 상품 이해가 안될 때!',
            ]}
            href={'/service/dict'}
            buttonText={'- 금융 지식 사전 -'}
            image={{
              href: '/static/images/dictionary.png',
              title: 'Dictionary Title',
            }}
          />
          <ServiceCard
            className={'keen-slider__slide'}
            keywords={[
              '재테크의 첫걸음!',
              '저축을 위한 예금 상품!',
            ]}
            href={'/service/deposit'}
            buttonText={'- 예금 상품 목록 -'}
            image={{
              href: '/static/images/deposit.png',
              title: 'Deposit Title',
            }}
          />
          <ServiceCard
            className={'keen-slider__slide'}
            keywords={[
              '큰 목돈 마련을 위한 시작!',
              '은행, 금리, 우대조건을 한눈에!',
            ]}
            href={'/service/saving'}
            buttonText={'- 적금 상품 목록 -'}
            image={{
              href: '/static/images/saving.png',
              title: 'Saving Title',
            }}
          />
          <ServiceCard
            className={'keen-slider__slide'}
            keywords={[
              '전세금 마련을 도와줄 전세대출!',
              '급전 마련을 위한 신용대출!',
            ]}
            href={'/service/loan'}
            buttonText={'- 대출 상품 목록 -'}
            image={{
              href: '/static/images/loan.png',
              title: 'Loan Title',
            }}
          />
        </div>
        {slider && (
          <div className={'dots'}>
            {[...Array(slider.details().size).keys()].map((idx) => (
              <button
                type={'button'}
                key={idx}
                onClick={() => (slider.moveToSlideRelative(idx))}
                className={clsx(classes.dot, (currentSlide === idx) && classes.dotActivated)}
              >
              </button>
            ))}
          </div>
        )}
      </div>
    </Template>
  );
}

export default HomeService;
