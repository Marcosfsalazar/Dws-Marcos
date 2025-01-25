import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/queryKeys';
import { Author } from '../types/Author';
import { getAuthorById } from '../services/authors.service';

export function useAuthor(id: string): UseQueryResult<Author, Error> {
  return useQuery<Author, Error>({
    queryKey: QUERY_KEYS.AUTHOR(id),
    queryFn: () => getAuthorById(id),
    staleTime: 5 * 60 * 1000,
  });
}
