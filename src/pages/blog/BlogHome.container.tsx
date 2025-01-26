import { usePosts } from '../../hooks/usePosts';
import BlogView from './BlogHome.view';
import { Card } from '../../components/ui/molecules/Card';
import { useFilterContext } from '../../context/FilterContext';
import { Chip } from '../../components/ui/atoms/Chip';
import { Typography } from '../../components/ui/atoms/Typography';
import { TypographyVariants } from '../../types/Typography';

const BlogContainer = () => {
  const { data: posts, isLoading, error } = usePosts();
  const {
    categories: filteredCategories,
    authors: filteredAuthors,
    setCategories: setFilteredCategories,
    setAuthors: setFilteredAuthors,
  } = useFilterContext();

  const filteredPosts = (posts ?? []).filter((post) => {
    const matchCat =
      filteredCategories.length === 0 ||
      post.categories.some((c) => filteredCategories.includes(c.id));
    const matchAuthor =
      filteredAuthors.length === 0 || filteredAuthors.includes(post.authorId);

    return matchCat && matchAuthor;
  });

  function handleApply(filters: { categories: string[]; authors: string[] }) {
    setFilteredCategories(filters.categories);
    setFilteredAuthors(filters.authors);
  }

  if (isLoading) return <p>Loading Mock</p>;
  if (error) return <p>error mock</p>;

  const cards = filteredPosts.map((post) => (
    <Card key={post.id}>
      <Card.Image src={post.thumbnail_url} alt={post.title} />
      <Card.Content>
        <Card.DateAuthor
          date={new Date(post.createdAt).toLocaleDateString()}
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

  return <BlogView data={cards} onApplyFilters={handleApply} />;
};

export default BlogContainer;
