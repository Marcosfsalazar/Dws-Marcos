import { Post } from '../../types/Post';

const BlogView = ({ data }: { data: Post[] }): JSX.Element => {
  return <div>{data.map((post) => post.title)}</div>;
};

export default BlogView;
