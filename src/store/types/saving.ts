interface Response {
  id: number;
  disclosureMonth: Date;
  financialCompanyCode: string;
  financialProductCode: string;
}

export interface Status {
  topFinancialGroupCode: string;
  totalCount: number;
  maxPageNumber: number;
}

export interface Base extends Response {
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

export interface Option extends Response {
  interestRateType: string;
  interestRateTypeName: string;
  saveTerm: string;
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

export interface SavingResult extends Saving<Status, Base, Option> {}

export interface SavingResponse {
  results: SavingResult;
}

export interface SavingState {
  contents: SavingResult;
  isError: boolean;
}
