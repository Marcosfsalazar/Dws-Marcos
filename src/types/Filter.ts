import { sortType } from './Sort';

export interface FilterState {
  categories: string[];
  authors: string[];
  sort: sortType;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setAuthors: React.Dispatch<React.SetStateAction<string[]>>;
  setSort: React.Dispatch<React.SetStateAction<sortType>>;
  resetFilters: ({
    category,
    author,
  }: {
    category?: boolean;
    author?: boolean;
  }) => void;
}
