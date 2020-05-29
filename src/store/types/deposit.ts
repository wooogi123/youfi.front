interface Response {
  [key: string]: string;
}

export interface Base extends Response {}
export interface Option extends Response {}

export interface Deposit<T, U> {
  base: T;
  options: U[];
}

export interface DepositRequest {
  topFinGrpNo: string;
  pageNo: string;
}

export interface DepositResponse {
  results: Deposit<Base, Option>[];
  totalPage: string;
}

export interface DepositState {
  contents: DepositResponse;
  isError: boolean;
}
