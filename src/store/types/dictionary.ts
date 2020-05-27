export interface DictionaryContent {
  category: string;
  title: string;
  keywords: string[];
  summary: string;
  detail: string;
}

export interface DictionaryState {
  contents: DictionaryContent[];
  isError: boolean;
}
