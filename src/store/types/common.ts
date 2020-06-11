export interface Response {
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
