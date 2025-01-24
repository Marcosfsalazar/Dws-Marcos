import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllPosts } from '../services/posts.service';
import { Post } from '../types/Post';

export function usePosts(): UseQueryResult<Post[], Error> {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });
}
