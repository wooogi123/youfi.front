import { Financial, Product, Status } from './common';

export interface DepositProduct extends Product {
  joinDeny: string;
  joinMember: string;
  maturityAfterInterest: string;
  specialCondition: string;
  comment?: string;
  maxLimit?: number;
}

export interface DepositOption extends Financial {
  interestRateType: string;
  interestRateTypeName: string;
  saveTerm: number;
  interestRate: number;
  interestRate2: number;
}

export interface Deposit<S, T, U> {
  status: S[];
  products: T[];
  options: U[];
}

export interface DepositResult extends Deposit<Status, DepositProduct, DepositOption> {}

export interface DepositResponse {
  results: DepositResult;
}

export interface DepositState {
  contents: DepositResult;
  isError: boolean;
}
