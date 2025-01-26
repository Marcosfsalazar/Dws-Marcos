import { CardsList } from '../../components/ui/organisms/CardsList';
import FilterPanel from '../../components/ui/organisms/FilterPanel/FilterPanel';
import { Container, Wrapper } from './BlogHome.style';
import { BlogViewProps } from '../../types/BlogHome';
import { DesktopPanel } from '../../styles/themes/screenSize';
import { BlogHead } from '../../components/ui/molecules/BlogHead';

const BlogView = ({ data, onApplyFilters }: BlogViewProps): JSX.Element => {
  return (
    <Container>
      <DesktopPanel>
        <BlogHead onApply={onApplyFilters} />
      </DesktopPanel>
      <Wrapper>
        <FilterPanel onApply={onApplyFilters} />
        <CardsList posts={data} />
      </Wrapper>
    </Container>
  );
};

export default BlogView;
