import styled from 'styled-components';
import { MobilePanel } from '../../../styles/themes/screenSize';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.neutral.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
`;

export const DesktopSearchInput = styled.input`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 320px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
    padding: 0 12px;
    margin-left: auto;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
  border-radius: 24px;
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.neutral.lightest};
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.primary.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const MobileSearchWrapper = styled(MobilePanel)`
  margin-left: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: end;
`;
