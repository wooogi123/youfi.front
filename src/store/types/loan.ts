import { Financial, Product, Status } from './common';

export interface RentHouseLoanProduct extends Product {
  loanIncidentalExpense: string;
  earlyPrepaymentFee: string;
  delayRate: string;
  loanLimit: string;
}

export interface RentHouseLoanOption extends Financial {
  repaymentType: string;
  repaymentTypeName: string;
  lendRateType: string;
  lendRateTypeName: string;
  lendRateMin: number;
  lendRateMax: number;
  lendRateAverage: number;
}

export interface CreditLoanProduct extends Product {
  creditProductType: string;
  creditProductTypeName: string;
  creditBureauName: string;
}

export interface CreditLoanOption extends Financial {
  creditLendRateType: string;
  creditLendRateTypeName: string;
  creditProductType: string;
  creditGrade1: number;
  creditGrade2: number;
  creditGrade3: number;
  creditGrade4: number;
  creditGrade5: number;
  creditGradeAverage: number;
}

interface Loan<T, U> {
  status: Status[];
  products: T[];
  options: U[];
}

interface LoanResponse<T> {
  results: T;
}

export interface RentHouseLoan extends Loan<RentHouseLoanProduct, RentHouseLoanOption> {}
export interface RentHouseResponse extends LoanResponse<RentHouseLoan> {}

export interface CreditLoan extends Loan<CreditLoanProduct, CreditLoanOption> {}
export interface CreditResponse extends LoanResponse<CreditLoan> {}

export interface AllLoanResponse {
  rentHouses: RentHouseResponse;
  credits: CreditResponse;
}

export interface LoanState {
  rentHouses: RentHouseLoan;
  credits: CreditLoan;
  isRentHouseLoanError: boolean;
  isCreditLoanError: boolean;
}
