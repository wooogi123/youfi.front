import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recommendAction, RootState, RecommendState } from '../store';

export function useRecommendStore(): RecommendState {
  return useSelector((state: RootState) => state.recommend);
}

export function useFetchRecc() {
  const dispatch = useDispatch();
  return useCallback((url: string) =>
    dispatch(recommendAction.request(url)), [dispatch]);
}
