import { ChangeEvent } from 'react';

export interface SearchProps {
  isSearch: boolean;
  search?: string;
  onChangeSearch?: (e?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type ServiceTitle = 'You-Fi' | '예금' | '적금' | '대출' | '맞춤 금융상품' | '금융 사전' | '';
