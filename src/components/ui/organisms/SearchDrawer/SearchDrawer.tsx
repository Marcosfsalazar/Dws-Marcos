import { Drawer } from '../../molecules/Drawer';
import { useLiveSearch } from '../../../../hooks/useLiveSearch';
import {
  SearchBox,
  SearchInput,
  IconButton,
} from '../../../layout/Header/Header.style';
import { ButtonVariants } from '../../../../types/Button';

import SearchIcon from '../../../../assets/icons/searchIcon.svg';
import { Typography } from '../../atoms/Typography';
import { TypographyVariants } from '../../../../types/Typography';

const SearchDrawer = () => {
  const {
    searchTerm,
    setSearchTerm,
    results,
    isLoading,
    error,
    handleSelectPost,
  } = useLiveSearch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <Drawer>
      <Drawer.Button variant={ButtonVariants.SEARCH}>
        <img src={SearchIcon} alt="search icon" width={20} height={20} />
      </Drawer.Button>

      <Drawer.Header>
        <SearchBox>
          <Drawer.CloseButton />
          <SearchInput
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <IconButton onClick={() => setSearchTerm('')}>X</IconButton>
        </SearchBox>
      </Drawer.Header>

      <Drawer.Content>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error searching</div>}

        <Drawer.List>
          {results.map((post) => (
            <Drawer.CloseWrapper
              key={post.id}
              onClick={() => handleSelectPost(post.id)}
            >
              <Drawer.Item>
                <Typography variant={TypographyVariants.BodySmall}>
                  {post.title}
                </Typography>
              </Drawer.Item>
            </Drawer.CloseWrapper>
          ))}
        </Drawer.List>
      </Drawer.Content>
    </Drawer>
  );
};

export default SearchDrawer;
