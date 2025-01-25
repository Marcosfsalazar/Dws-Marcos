import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/queryKeys';
import { Author } from '../types/Author';
import { getAllAuthors } from '../services/authors.service';

export function useAuthors(): UseQueryResult<Author[], Error> {
  return useQuery<Author[], Error>({
    queryKey: QUERY_KEYS.AUTHORS,
    queryFn: getAllAuthors,
    staleTime: 5 * 60 * 1000,
  });
}
