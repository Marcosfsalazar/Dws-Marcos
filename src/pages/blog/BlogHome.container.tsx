import { usePosts } from '../../hooks/usePosts';
import BlogView from './BlogHome.view';
import { Card } from '../../components/ui/molecules/Card';
import { useFilterContext } from '../../context/FilterContext';
import { Chip } from '../../components/ui/atoms/Chip';
import { Typography } from '../../components/ui/atoms/Typography';
import { TypographyVariants } from '../../types/Typography';
import { SORT_KEYS } from '../../constants/sortKeys';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loader from '../../components/ui/atoms/Loader/Loader';
import { ErrorMessage } from '../../components/ui/atoms/ErrorMessage';

const BlogContainer = () => {
  const { data: posts, isLoading, error } = usePosts();
  const {
    categories: filteredCategories,
    authors: filteredAuthors,
    sort,
    searchTerm,
    setCategories: setFilteredCategories,
    setAuthors: setFilteredAuthors,
  } = useFilterContext();
  const navigate = useNavigate();

  function handleCardClick(id: string) {
    navigate(`/post/${id}`);
  }

  const filteredPosts = (posts ?? []).filter((post) => {
    const matchCat =
      filteredCategories.length === 0 ||
      post.categories.some((c) => filteredCategories.includes(c.id));
    const matchAuthor =
      filteredAuthors.length === 0 || filteredAuthors.includes(post.authorId);
    const matchSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCat && matchAuthor && matchSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sort.type === SORT_KEYS.NEW) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  function handleApply(filters: { categories: string[]; authors: string[] }) {
    setFilteredCategories(filters.categories);
    setFilteredAuthors(filters.authors);
  }

  if (isLoading) return <Loader />;
  if (error)
    return (
      <ErrorMessage
        message={`Sorry we can't load this now, please reload the page and try again!`}
      />
    );

  const cards = sortedPosts.map((post) => (
    <Card key={post.id} onClick={() => handleCardClick(post.id)}>
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

  return <BlogView data={cards} onApplyFilters={handleApply} />;
};

export default BlogContainer;
