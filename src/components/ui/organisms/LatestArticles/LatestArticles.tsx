import { usePosts } from '../../../../hooks/usePosts';
import { CardsList } from '../CardsList';
import { Card } from '../../molecules/Card';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Chip } from '../../atoms/Chip';
import { Typography } from '../../atoms/Typography';
import { TypographyVariants } from '../../../../types/Typography';
import { useNavigate } from 'react-router-dom';
import { LatestArticlesWrapper } from './LatestArticles.style';

interface LatestArticlesProps {
  excludePostId?: string;
  limit?: number;
  title?: string;
}

export default function LatestArticles({
  excludePostId,
  limit = 3,
  title = 'Last articles',
}: LatestArticlesProps) {
  const { data: allPosts, isLoading, error } = usePosts();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>Error loading articles</p>;
  if (!allPosts) return null;

  let filtered = allPosts;
  if (excludePostId) {
    filtered = filtered.filter((p) => p.id !== excludePostId);
  }

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  const limited = sorted.slice(0, limit);

  const cards = limited.map((post) => (
    <Card key={post.id} onClick={() => navigate(`/post/${post.id}`)}>
      <Card.Image src={post.thumbnail_url} alt={post.title} />
      <Card.Content>
        <Card.DateAuthor
          date={format(post.createdAt, 'MMM dd, yyyy', { locale: ptBR })}
          author={post.author.name}
        />
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.content.slice(0, 80)}...</Card.Description>
        <Card.Categories>
          {post.categories.map((cat) => (
            <Chip height={32} width={84} key={cat.id}>
              <Typography variant={TypographyVariants.Caption}>
                {cat.name}
              </Typography>
            </Chip>
          ))}
        </Card.Categories>
      </Card.Content>
    </Card>
  ));

  return (
    <LatestArticlesWrapper>
      <Typography variant={TypographyVariants.H3}>{title}</Typography>
      <CardsList posts={cards} />
    </LatestArticlesWrapper>
  );
}
