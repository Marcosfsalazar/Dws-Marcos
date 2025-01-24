import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getPostById } from '../services/posts.service';
import { Post } from '../types/Post';
import { QUERY_KEYS } from '../constants/queryKeys';

export function usePost(id: string): UseQueryResult<Post, Error> {
  return useQuery<Post, Error>({
    queryKey: QUERY_KEYS.POST(id),
    queryFn: () => getPostById(id),
    staleTime: 5 * 60 * 1000,
  });
}
