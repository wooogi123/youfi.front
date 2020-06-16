import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dictionaryAction, RootState, DictionaryState } from '../store';

export function useDictStore(): DictionaryState {
  return useSelector((state: RootState) => state.dictionary);
}

export function useFetchDict() {
  const dispatch = useDispatch();
  return useCallback((url: string) =>
    dispatch(dictionaryAction.request(url)), [dispatch]);
}
