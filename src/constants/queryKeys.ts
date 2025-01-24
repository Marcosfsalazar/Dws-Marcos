export const QUERY_KEYS = {
  POSTS: ['posts'] as const,
  POST: (id: string) => ['post', id] as const,
};
