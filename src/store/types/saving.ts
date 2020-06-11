import { Response, Status } from './common';

export interface SavingProduct extends Response {
  financialCompanyName: string;
  financialProductName: string;
  joinWay: string;
  joinDeny: string;
  joinMember: string;
  maturityAfterInterest: string;
  specialCondition: string;
  comment?: string;
  maxLimit?: number;
  disclosureStartDay: Date;
  disclosureEndDay?: Date;
  financialCompanySubmitDay: Date;
}

export interface SavingOption extends Response {
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
