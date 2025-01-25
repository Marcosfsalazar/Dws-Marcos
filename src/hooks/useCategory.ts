import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/queryKeys';
import { Category } from '../types/Category';
import { getCategoryById } from '../services/categories.service';

export function useCategory(id: string): UseQueryResult<Category, Error> {
  return useQuery<Category, Error>({
    queryKey: QUERY_KEYS.CATEGORY(id),
    queryFn: () => getCategoryById(id),
    staleTime: 5 * 60 * 1000,
  });
}
