export interface Financial {
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

export interface Product extends Financial {
  financialCompanyName: string;
  financialProductName: string;
  joinWay: string;
  disclosureStartDay: Date;
  disclosureEndDay?: Date;
  financialCompanySubmitDay: Date;
}
