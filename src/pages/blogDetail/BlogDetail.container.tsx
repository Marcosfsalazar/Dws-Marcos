import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';
import BlogDetailView from './BlogDetail.view';
import Loader from '../../components/ui/atoms/Loader/Loader';

export default function BlogDetailContainer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <p>No post ID provided.</p>;

  const { data: post, isLoading, error } = usePost(id);

  function handleGoBack() {
    navigate(-1);
  }

  if (isLoading) return <Loader />;
  if (error) return <p>Something went wrong!</p>;
  if (!post) return <p>Post not found.</p>;

  return <BlogDetailView post={post} onGoBack={handleGoBack} />;
}
