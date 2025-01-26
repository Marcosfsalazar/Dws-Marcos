import { Post } from '../../types/Post';
import { DetailContainer, PostImage, ContentWrapper } from './BlogDetail.style';
import { Typography } from '../../components/ui/atoms/Typography';
import { TypographyVariants } from '../../types/Typography';
import { AuthorDetails } from '../../components/ui/molecules/AuthorDetails';
import { Button } from '../../components/ui/atoms/Button';
import { ButtonVariants } from '../../types/Button';
import LeftArrow from '../../assets/icons/leftArrow.svg';

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
      <Button variant={ButtonVariants.SECONDARY} onClick={onGoBack}>
        <img src={LeftArrow} alt="back button" width={15} height={15} />
        <span>Back</span>
      </Button>
      <Typography variant={TypographyVariants.H2} as="h2">
        {post.title}
      </Typography>
      <AuthorDetails
        name={post.author.name}
        createdAt={post.createdAt}
        authorImage={post.author.profilePicture}
      />
      <PostImage src={post.thumbnail_url} alt={post.title} />
      <ContentWrapper>
        <Typography variant={TypographyVariants.BodyLarge} as="div">
          {post.content}
        </Typography>
      </ContentWrapper>
    </DetailContainer>
  );
}
