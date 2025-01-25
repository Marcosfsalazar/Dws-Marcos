import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/queryKeys';
import { Category } from '../types/Category';
import { getAllCategories } from '../services/categories.service';

export function useCategories(): UseQueryResult<Category[], Error> {
  return useQuery<Category[], Error>({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: getAllCategories,
    staleTime: 5 * 60 * 1000,
  });
}
