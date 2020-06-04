interface Response {
  [key: string]: string;
}

export interface Status extends Response {}
export interface Base extends Response {}
export interface Option extends Response {}

export interface Deposit<S, T, U> {
  status: S[];
  products: T[];
  options: U[];
}

export interface DepositRequest {
  topFinGrpNo: string;
  pageNo: string;
}

export interface DepositResult extends Deposit<Status, Base, Option> {}

export interface DepositResponse {
  results: DepositResult;
}

export interface DepositState {
  contents: DepositResult;
  isError: boolean;
}
