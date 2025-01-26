import { useFilterContext } from '../../../context/FilterContext';
import { ButtonVariants } from '../../../types/Button';
import { TypographyVariants } from '../../../types/Typography';
import { Typography } from '../../ui/atoms/Typography';
import { Drawer } from '../../ui/molecules/Drawer';
import {
  DesktopSearchInput,
  HeaderWrapper,
  IconButton,
  LogoWrapper,
  MobileSearchWrapper,
  SearchBox,
  SearchInput,
} from './Header.style';
import SearchIcon from '../../../assets/icons/searchIcon.svg';
import { DesktopPanel } from '../../../styles/themes/screenSize';
import { Button } from '../../ui/atoms/Button';

const Header = () => {
  const { searchTerm, setSearchTerm } = useFilterContext();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Typography variant={TypographyVariants.H2}>dentsu</Typography>
        <Typography variant={TypographyVariants.Caption}>
          world services
        </Typography>
      </LogoWrapper>
      <DesktopPanel>
        <SearchBox>
          <DesktopSearchInput
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button variant={ButtonVariants.SEARCH}>
            <img src={SearchIcon} alt="search icon" width={20} height={20} />
          </Button>
        </SearchBox>
      </DesktopPanel>
      <MobileSearchWrapper>
        <Drawer>
          <Drawer.Button variant={ButtonVariants.SEARCH}>
            <img src={SearchIcon} alt="search icon" width={20} height={20} />
          </Drawer.Button>
          <Drawer.Header>
            <SearchBox>
              <Drawer.CloseButton />
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <IconButton onClick={() => setSearchTerm('')}>X</IconButton>
            </SearchBox>
          </Drawer.Header>
        </Drawer>
      </MobileSearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
