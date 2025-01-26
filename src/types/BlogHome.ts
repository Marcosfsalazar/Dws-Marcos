import { ReactNode } from 'react';

export interface BlogViewProps {
  data: ReactNode[];
  onApplyFilters: (filters: {
    categories: string[];
    authors: string[];
  }) => void;
}
