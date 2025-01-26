import { ButtonVariants } from '../../../../types/Button';
import { Post } from '../../../../types/Post';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { AuthorDetails } from '../../molecules/AuthorDetails';
import { ContentWrapper, PostImage } from './PostView.styles';
import LeftArrow from '../../../../assets/icons/leftArrow.svg';
import { TypographyVariants } from '../../../../types/Typography';

interface PostViewProps {
  post: Post;
  onGoBack: () => void;
}

const PostView = ({ post, onGoBack }: PostViewProps) => {
  return (
    <>
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
    </>
  );
};

export default PostView;
