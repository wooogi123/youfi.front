import { Financial, Product } from './common';

export interface SavingProduct extends Product {
  joinDeny: string;
  joinMember: string;
  maturityAfterInterest: string;
  special: string;
  comment?: string;
  maxLimit?: number;
}

export interface SavingOption extends Financial {
  interestName: string;
  savingName: string;
  saveTerm: number;
  interestRate: number;
  interestRate2: number;
}

export interface Saving<T, U> {
  products: T[];
  options: U[];
}

export interface SavingResult extends Saving<SavingProduct, SavingOption> {}

export interface SavingState {
  contents: SavingResult;
  isError: boolean;
}
