import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  depositAction, RootState, DepositState, DepositRequest,
} from '../store';

export function useDepositStore(): DepositState {
  return useSelector((state: RootState) => state.deposit);
}

export function useFetchDeposit() {
  const dispatch = useDispatch();
  return useCallback(({ topFinGrpNo, pageNo }: DepositRequest) =>
    dispatch(depositAction.request({ topFinGrpNo, pageNo })), [dispatch]);
}
