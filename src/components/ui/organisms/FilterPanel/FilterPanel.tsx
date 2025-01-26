import { useAuthors } from '../../../../hooks/useAuthors';
import { useCategories } from '../../../../hooks/useCategories';
import { ButtonVariants } from '../../../../types/Button';
import ArrowDown from '../../../../assets/icons/arrowDown.svg';
import CloseIcon from '../../../../assets/icons/closeIcon.svg';
import {
  AccentIcon,
  CloseButton,
  DesktopPanel,
  FilterPanelContainer,
  FiltersContainer,
  MobilePanel,
} from './FilterPanel.style';
import { Dropdown } from '../../molecules/Dropdown';
import { SORT_KEYS } from '../../../../constants/sortKeys';
import { useFilterContext } from '../../../../context/FilterContext';
import { sortType } from '../../../../types/Sort';
import { ReactNode } from 'react';
import SelectorCard from '../../molecules/SelectorCard/SelectorCard';

interface FilterPanelProps {
  onApply: (filters: { categories: string[]; authors: string[] }) => void;
}

interface ClearFuncParams {
  category?: boolean;
  author?: boolean;
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
    resetFilters,
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

    if (selectedNames.length > 3) {
      return `${selectedNames.slice(0, 3).join(', ')}...`;
    }

    return selectedNames.join(', ');
  }

  function handleIcon(
    hasItem: boolean,
    clearFunc: ({ category, author }: ClearFuncParams) => void,
    clearFuncParam: ClearFuncParams,
    icon: string,
    altText: string,
  ): ReactNode {
    if (hasItem) {
      return (
        <CloseButton onClick={() => clearFunc(clearFuncParam)}>
          <img
            src={CloseIcon}
            alt={`clean filters ${altText}`}
            width={10}
            height={10}
          />
        </CloseButton>
      );
    }
    return <img src={icon} alt={altText} width={10} height={10} />;
  }

  return (
    <>
      <MobilePanel>
        <FilterPanelContainer>
          <FiltersContainer>
            <section>
              <Dropdown>
                <Dropdown.Button variant={ButtonVariants.DROPDOWN}>
                  <>
                    {handleName(
                      'Category',
                      selectedCategories,
                      categories || [],
                    )}
                  </>
                  {handleIcon(
                    !!(selectedCategories.length > 0),
                    resetFilters,
                    {
                      category: true,
                    },
                    ArrowDown,
                    'category button',
                  )}
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
                  {handleIcon(
                    !!(selectedAuthors.length > 0),
                    resetFilters,
                    {
                      author: true,
                    },
                    ArrowDown,
                    'author button',
                  )}
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
      </MobilePanel>
      <DesktopPanel>
        <SelectorCard>
          <SelectorCard.Section label="Category">
            {categories?.map((cat) => (
              <SelectorCard.Item
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                selected={selectedCategories.includes(cat.id)}
              >
                {cat.name}
              </SelectorCard.Item>
            ))}
          </SelectorCard.Section>

          <SelectorCard.Section label="Author">
            {authors?.map((author) => (
              <SelectorCard.Item
                key={author.id}
                onClick={() => handleAuthorChange(author.id)}
                selected={selectedAuthors.includes(author.id)}
              >
                {author.name}
              </SelectorCard.Item>
            ))}
          </SelectorCard.Section>
        </SelectorCard>
      </DesktopPanel>
    </>
  );
};

export default FilterPanel;
