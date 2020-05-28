import { ChangeEvent } from 'react';

export interface SearchProps {
  isSearch: boolean;
  search?: string;
  onChangeSearch?: (e?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
