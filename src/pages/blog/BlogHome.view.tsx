import { CardsList } from '../../components/ui/organisms/CardsList';
import FilterPanel from '../../components/ui/organisms/FilterPanel/FilterPanel';
import { Wrapper } from './BlogHome.style';
import { BlogViewProps } from '../../types/BlogHome';

const BlogView = ({ data, onApplyFilters }: BlogViewProps): JSX.Element => {
  return (
    <Wrapper>
      <FilterPanel onApply={onApplyFilters} />
      <CardsList posts={data} />
    </Wrapper>
  );
};

export default BlogView;
