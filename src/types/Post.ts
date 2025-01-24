import { Category } from './Category';
import { Author } from './Author';

export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
  author: Author;
}
