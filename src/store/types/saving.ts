import { Financial, Product, Status } from './common';

export interface SavingProduct extends Product {
  joinDeny: string;
  joinMember: string;
  maturityAfterInterest: string;
  specialCondition: string;
  comment?: string;
  maxLimit?: number;
}

export interface SavingOption extends Financial {
  interestRateType: string;
  interestRateTypeName: string;
  saveTerm: number;
  interestRate: number;
  interestRate2: number;
  savingType: string;
  savingTypeName: string;
}

export interface Saving<S, T, U> {
  status: S[];
  products: T[];
  options: U[];
}

export interface SavingResult extends Saving<Status, SavingProduct, SavingOption> {}

export interface SavingResponse {
  results: SavingResult;
}

export interface SavingState {
  contents: SavingResult;
  isError: boolean;
}
