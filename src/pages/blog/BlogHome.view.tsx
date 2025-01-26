import { CardsList } from '../../components/ui/organisms/CardsList';
import { ReactNode } from 'react';
import FilterPanel from '../../components/ui/organisms/FilterPanel/FilterPanel';
import { Wrapper } from './BlogHome.style';

interface BlogViewProps {
  data: ReactNode[];
  onApplyFilters: (filters: {
    categories: string[];
    authors: string[];
  }) => void;
}

const BlogView = ({ data, onApplyFilters }: BlogViewProps): JSX.Element => {
  return (
    <Wrapper>
      <FilterPanel onApply={onApplyFilters} />
      <CardsList posts={data} />
    </Wrapper>
  );
};

export default BlogView;
