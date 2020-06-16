import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loanAction,
  RootState,
  LoanState,
  RentHouseResult,
  CreditResult,
} from '../store';

export function useLoanStore(): LoanState {
  return useSelector((state: RootState) => state.loan);
}

export function useRentHouseStore(): RentHouseResult {
  return useSelector((state: RootState) => state.loan.rentHouses);
}

export function useCreditStore(): CreditResult {
  return useSelector((state: RootState) => state.loan.credits);
}

export function useFetchLoan() {
  const dispatch = useDispatch();
  return useCallback(() =>
    dispatch(loanAction.request()), [dispatch]);
}
