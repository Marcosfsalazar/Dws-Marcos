import { useFilterContext } from '../../../context/FilterContext';
import { ButtonVariants } from '../../../types/Button';
import { TypographyVariants } from '../../../types/Typography';
import { Typography } from '../../ui/atoms/Typography';
import {
  DesktopSearchInput,
  HeaderWrapper,
  LogoWrapper,
  MobileSearchWrapper,
  SearchBox,
} from './Header.style';
import SearchIcon from '../../../assets/icons/searchIcon.svg';
import { DesktopPanel } from '../../../styles/themes/screenSize';
import { Button } from '../../ui/atoms/Button';
import { SearchDrawer } from '../../ui/organisms/SearchDrawer';

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
        <SearchDrawer />
      </MobileSearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
