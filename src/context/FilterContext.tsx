import { createContext, useContext, useState } from 'react';
import { sortType } from '../types/Sort';
import { SORT_KEYS } from '../constants/sortKeys';

interface FilterState {
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

const FilterContext = createContext<FilterState | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [sort, setSort] = useState<sortType>({ type: SORT_KEYS.NEW });

  function resetFilters({
    category,
    author,
  }: {
    category?: boolean;
    author?: boolean;
  }) {
    if (!!category) {
      setCategories([]);
      return;
    }
    if (!!author) {
      setAuthors([]);
      return;
    }
    setCategories([]);
    setAuthors([]);
  }

  return (
    <FilterContext.Provider
      value={{
        categories,
        authors,
        sort,
        setCategories,
        setAuthors,
        resetFilters,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
}
