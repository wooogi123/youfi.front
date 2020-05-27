import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dictionaryAction, RootState } from '../store';

export function useDictStore() {
  const dictionary = useSelector((state: RootState) => state.dictionary);
  return dictionary;
}

export function useFetchDict() {
  const dispatch = useDispatch();
  return useCallback((url: string) =>
    dispatch(dictionaryAction.request(url)), [dispatch]);
}
