import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  depositAction, RootState, DepositState,
} from '../store';

export function useDepositStore(): DepositState {
  return useSelector((state: RootState) => state.deposit);
}

export function useFetchDeposit() {
  const dispatch = useDispatch();
  return useCallback(() =>
    dispatch(depositAction.request()), [dispatch]);
}
