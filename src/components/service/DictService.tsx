import React from 'react';
import { makeStyles } from '@material-ui/core';
import Template from './Template';
import { DictionaryContent } from '../../store';
import { ContentCard } from '../common';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface DictServiceProps {
  contents: DictionaryContent[];
}

function DictService({ contents }: DictServiceProps) {
  const classes = useStyles();

  return (
    <Template title={'금융 사전'}>
      <div className={classes.root}>
        {contents.map((dict: DictionaryContent) => (
          <ContentCard
            category={dict.category}
            title={dict.title}
            keywords={dict.keywords}
            summary={dict.summary}
            detail={dict.detail}
            key={dict.title}
          />
        ))}
      </div>
    </Template>
  );
}

export default DictService;
