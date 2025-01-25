export const QUERY_KEYS = {
  POSTS: ['posts'] as const,
  POST: (id: string) => ['post', id] as const,
  CATEGORIES: ['categories'] as const,
  CATEGORY: (id: string) => ['category', id] as const,
  AUTHORS: ['authors'] as const,
  AUTHOR: (id: string) => ['author', id] as const,
};
