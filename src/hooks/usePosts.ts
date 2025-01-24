import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllPosts } from '../services/posts.service';
import { Post } from '../types/Post';
import { QUERY_KEYS } from '../constants/queryKeys';

export function usePosts(): UseQueryResult<Post[], Error> {
  return useQuery<Post[], Error>({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: getAllPosts,
    staleTime: 5 * 60 * 1000,
  });
}
