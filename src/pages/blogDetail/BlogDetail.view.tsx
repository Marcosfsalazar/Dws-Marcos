import { LatestArticles } from '../../components/ui/organisms/LatestArticles';
import { PostView } from '../../components/ui/organisms/PostView';
import { Post } from '../../types/Post';
import { DetailContainer } from './BlogDetail.style';

interface BlogDetailViewProps {
  post: Post;
  onGoBack: () => void;
}

export default function BlogDetailView({
  post,
  onGoBack,
}: BlogDetailViewProps) {
  return (
    <DetailContainer>
      <PostView post={post} onGoBack={onGoBack} />
      <LatestArticles excludePostId={post.id} limit={3} />
    </DetailContainer>
  );
}
