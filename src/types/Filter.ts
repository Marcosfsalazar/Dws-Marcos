import { sortType } from './Sort';

export interface FilterState {
  categories: string[];
  authors: string[];
  sort: sortType;
  searchTerm: string;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setAuthors: React.Dispatch<React.SetStateAction<string[]>>;
  setSort: React.Dispatch<React.SetStateAction<sortType>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: ({
    category,
    author,
  }: {
    category?: boolean;
    author?: boolean;
  }) => void;
}
