import { Response, Status } from './common';

export interface DepositProduct extends Response {
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

export interface DepositOption extends Response {
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
