import { useAuthors } from '../../../../hooks/useAuthors';
import { useCategories } from '../../../../hooks/useCategories';
import { ButtonVariants } from '../../../../types/Button';
import ArrowDown from '../../../../assets/icons/arrowDown.svg';
import {
  AccentIcon,
  FilterPanelContainer,
  FiltersContainer,
} from './FilterPanel.style';
import { Dropdown } from '../../molecules/Dropdown';
import { SORT_KEYS } from '../../../../constants/sortKeys';
import { useFilterContext } from '../../../../context/FilterContext';
import { sortType } from '../../../../types/Sort';

interface FilterPanelProps {
  onApply: (filters: { categories: string[]; authors: string[] }) => void;
}

const FilterPanel = ({ onApply }: FilterPanelProps) => {
  const { data: categories, isLoading: catLoading } = useCategories();
  const { data: authors, isLoading: authLoading } = useAuthors();
  const {
    categories: selectedCategories,
    authors: selectedAuthors,
    sort,
    setCategories: setSelectedCategories,
    setAuthors: setSelectedAuthors,
    setSort,
  } = useFilterContext();

  if (catLoading || authLoading) return <p>Loading mock...</p>;

  function handleCategoryChange(id: string) {
    setSelectedCategories((prev: string[]) => {
      const newValue = prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id];

      onApply({
        categories: newValue,
        authors: selectedAuthors,
      });
      return newValue;
    });
  }

  function handleAuthorChange(id: string) {
    setSelectedAuthors((prev) => {
      const newValue = prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id];

      onApply({
        categories: selectedCategories,
        authors: newValue,
      });
      return newValue;
    });
  }

  function handleSortChange(sortType: sortType) {
    setSort(sortType);

    onApply({
      categories: selectedCategories,
      authors: selectedAuthors,
    });
  }

  function handleName<T extends { id: string; name: string }>(
    defaultText: string,
    selectedIds: string[],
    items: T[],
  ) {
    if (selectedIds.length === 0) {
      return defaultText;
    }

    const selectedNames = items
      .filter((item) => selectedIds.includes(item.id))
      .map((item) => item.name);

    return selectedNames.join(', ');
  }

  return (
    <FilterPanelContainer>
      <FiltersContainer>
        <section>
          <Dropdown>
            <Dropdown.Button variant={ButtonVariants.DROPDOWN}>
              <>
                {handleName('Category', selectedCategories, categories || [])}
              </>
              <img
                src={ArrowDown}
                alt="categories filter button"
                width={10}
                height={10}
              />
            </Dropdown.Button>

            <Dropdown.Menu>
              {categories?.map((cat) => (
                <Dropdown.Item
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </section>
        <section>
          <Dropdown>
            <Dropdown.Button variant={ButtonVariants.DROPDOWN}>
              <>{handleName('Author', selectedAuthors, authors || [])}</>
              <img
                src={ArrowDown}
                alt="authors filter button"
                width={10}
                height={10}
              />
            </Dropdown.Button>

            <Dropdown.Menu>
              {authors?.map((author) => (
                <Dropdown.Item
                  key={author.id}
                  onClick={() => handleAuthorChange(author.id)}
                >
                  {author.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </section>
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
      </FiltersContainer>
    </FilterPanelContainer>
  );
};

export default FilterPanel;
