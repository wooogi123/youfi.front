import React from 'react';
import { makeStyles } from '@material-ui/core';
import Template from './Template';
import { DictionaryContent } from '../../store';
import { DictionaryCard, SearchProps } from '../common';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface DictServiceProps extends SearchProps {
  contents: DictionaryContent[];
}

function DictService({
  contents, isSearch, search, onChangeSearch,
}: DictServiceProps) {
  const classes = useStyles();

  return (
    <Template
      title={'금융 사전'}
      isSearch={isSearch}
      search={search}
      onChangeSearch={onChangeSearch}
    >
      <div className={classes.root}>
        {contents.map((dict: DictionaryContent) => (
          <DictionaryCard
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
