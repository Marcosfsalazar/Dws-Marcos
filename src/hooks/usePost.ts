import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getPostById } from '../services/posts.service';
import { Post } from '../types/Post';

export function usePost(id: string): UseQueryResult<Post, Error> {
  return useQuery<Post, Error>({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    staleTime: 5 * 60 * 1000,
  });
}
