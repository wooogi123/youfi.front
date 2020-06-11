import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loanAction,
  RootState,
  LoanState,
  RentHouseLoan,
  CreditLoan,
} from '../store';

export function useLoanStore(): LoanState {
  return useSelector((state: RootState) => state.loan);
}

export function useRentHouseLoanStore(): RentHouseLoan {
  return useSelector((state: RootState) => state.loan.rentHouses);
}

export function useCreditLoanStore(): CreditLoan {
  return useSelector((state: RootState) => state.loan.credits);
}

export function useFetchLoan() {
  const dispatch = useDispatch();
  return useCallback(() =>
    dispatch(loanAction.request()), [dispatch]);
}
