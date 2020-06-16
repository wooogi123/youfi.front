export interface Financial {
  companyCode: string;
  productCode: string;
}

export interface Product extends Financial {
  companyName: string;
  productName: string;
  joinWay: string;
  startDate: string;
  endDate: string;
}
