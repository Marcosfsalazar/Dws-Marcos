export interface FilterComponentProps {
  onApply: (filters: { categories: string[]; authors: string[] }) => void;
}

export interface ClearFuncParams {
  category?: boolean;
  author?: boolean;
}
