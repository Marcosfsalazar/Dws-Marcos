import { usePosts } from '../../hooks/usePosts';
import BlogView from './BlogList.view';

const BlogContainer = () => {
  const { data: posts, isLoading, error } = usePosts();
  if (isLoading) return <p>Loading Mock</p>;
  if (error) return <p>error mock</p>;

  return <BlogView data={posts ?? []} />;
};

export default BlogContainer;
