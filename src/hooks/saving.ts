import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  savingAction, RootState,
} from '../store';
import { SavingState } from '../store/types/saving';

export function useSavingStore(): SavingState {
  return useSelector((state: RootState) => state.saving);
}

export function useFetchSaving() {
  const dispatch = useDispatch();
  return useCallback(() =>
    dispatch(savingAction.request()), [dispatch]);
}
