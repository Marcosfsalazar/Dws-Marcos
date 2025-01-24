import BlogView from './Blog.view';

const BlogContainer = () => {
  const dumbFunction = () => 'hello world!';
  let data = dumbFunction();
  return <BlogView data={data} />;
};

export default BlogContainer;
