import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';
import BlogDetailView from './BlogDetail.view';
import Loader from '../../components/ui/atoms/Loader/Loader';
import { ErrorMessage } from '../../components/ui/atoms/ErrorMessage';

export default function BlogDetailContainer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <p>404</p>;

  const { data: post, isLoading, error } = usePost(id);

  function handleGoBack() {
    navigate(-1);
  }

  if (isLoading) return <Loader />;
  if (error)
    return (
      <ErrorMessage
        message={`Sorry, we can't load this now, please reload the page and try again!`}
      />
    );
  if (!post) return <p>Post not found.</p>;

  return <BlogDetailView post={post} onGoBack={handleGoBack} />;
}
