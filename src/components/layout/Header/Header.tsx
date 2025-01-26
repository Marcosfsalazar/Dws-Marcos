import { TypographyVariants } from '../../../types/Typography';
import { Typography } from '../../ui/atoms/Typography';
import { HeaderWrapper, LogoWrapper } from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Typography variant={TypographyVariants.H2}>dentsu</Typography>
        <Typography variant={TypographyVariants.Caption}>
          world services
        </Typography>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
