import { SORT_KEYS } from '../../../../constants/sortKeys';
import { useFilterContext } from '../../../../context/FilterContext';
import { ButtonVariants } from '../../../../types/Button';
import { FilterComponentProps } from '../../../../types/FilterComponent';
import { sortType } from '../../../../types/Sort';
import { TypographyVariants } from '../../../../types/Typography';
import { Typography } from '../../atoms/Typography';
import { Dropdown } from '../Dropdown';
import { AccentIcon, BlogHeadContainer } from './BlogHead.styled';

const BlogHead = ({ onApply }: FilterComponentProps) => {
  const { sort, categories, authors, setSort } = useFilterContext();
  function handleSortChange(sortType: sortType) {
    setSort(sortType);
    onApply({
      categories: categories,
      authors: authors,
    });
  }

  return (
    <BlogHeadContainer>
      <Typography variant={TypographyVariants.H2}>DWS blog</Typography>
      <section>
        <Dropdown>
          <Dropdown.Button variant={ButtonVariants.SORT}>
            <div>{sort.type}</div>
            <AccentIcon>&#8645;</AccentIcon>
          </Dropdown.Button>

          <Dropdown.Menu>
            <Dropdown.Item
              key={SORT_KEYS.NEW}
              onClick={() => handleSortChange({ type: SORT_KEYS.NEW })}
            >
              {SORT_KEYS.NEW}
            </Dropdown.Item>
            <Dropdown.Item
              key={SORT_KEYS.OLD}
              onClick={() => handleSortChange({ type: SORT_KEYS.OLD })}
            >
              {SORT_KEYS.OLD}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </BlogHeadContainer>
  );
};

export default BlogHead;
