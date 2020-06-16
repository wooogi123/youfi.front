import { Financial, Product } from './common';

export interface DepositProduct extends Product {
  joinDeny: string;
  joinMember: string;
  maturityAfterInterest: string;
  special: string;
  comment?: string;
  maxLimit?: number;
}

export interface DepositOption extends Financial {
  interestName: string;
  saveTerm: number;
  interestRate: number;
  interestRate2: number;
}

export interface Deposit<T, U> {
  products: T[];
  options: U[];
}

export interface DepositResult extends Deposit<DepositProduct, DepositOption> {}

export interface DepositState {
  contents: DepositResult;
  isError: boolean;
}
