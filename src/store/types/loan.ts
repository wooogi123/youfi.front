import { Financial, Product } from './common';

export interface RentHouseProduct extends Product {
  loanIncidentalExpense: string;
  earlyPrepaymentFee: string;
  delayRate: string;
  loanLimit: string;
}

export interface RentHouseOption extends Financial {
  repaymentName: string;
  lendRateName: string;
  lendRateMin: number;
  lendRateMax: number;
  lendRateAverage: number;
}

export interface CreditProduct extends Product {
  creditProductType: string;
  creditProductTypeName: string;
  creditBureauName?: string;
}

export interface CreditOption extends Financial {
  creditProductType: string;
  creditLendName: string;
  creditGrade1: number;
  creditGrade2: number;
  creditGrade3: number;
  creditGrade4: number;
  creditGrade5: number;
  creditGradeAverage: number;
}

interface Loan<T, U> {
  products: T[];
  options: U[];
}

export interface RentHouseResult extends Loan<RentHouseProduct, RentHouseOption> {}

export interface CreditResult extends Loan<CreditProduct, CreditOption> {}

export interface LoanResult {
  rentHouses: RentHouseResult;
  credits: CreditResult;
}

export interface LoanState {
  rentHouses: RentHouseResult;
  credits: CreditResult;
  isRentHouseLoanError: boolean;
  isCreditLoanError: boolean;
}
