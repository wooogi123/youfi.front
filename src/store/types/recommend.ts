export interface RecommendOption {
  repaymentName: string;
  lendRateName: string;
  lendRateMin?: number;
  lendRateMax?: number;
  lendRateAverage?: number;
}

export interface RecommendContent {
  productType: string;
  region: string;
  productName: string;
  joinWay: string;
  special: string;
  comment: string;
  joinMember?: string;
  monthMoney?: string;
  saveTerms?: string;
  loanDateInfo?: string;
  loanInciedntalExpense?: string;
  earlyPrepaymentFee?: string;
  loanLimit?: string;
  option?: RecommendOption[];
}

export interface RecommendResult {
  contents: RecommendContent[];
}

export interface RecommendState {
  contents: RecommendContent[];
  isError: boolean;
}
