import styled, { css } from 'styled-components';
import { StyledButton } from '../../atoms/Button/Button.style';

export const DesktopPanelWrapper = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 300px;
    border-right: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
    padding: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutral.lightest};
  }
`;

export const DesktopSectionWrapper = styled.section`
  margin-bottom: 24px;
`;

export const DesktopSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSizes.bodyLarge};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const DesktopItemWrapper = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.medium};
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.extraLight};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary.medium};
  }
`;

export const CustomSelectButton = styled(StyledButton)<{
  selected?: boolean;
}>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(0, 149, 152, 0.05);
      border: 1.25px solid ${({ theme }) => theme.colors.accent1.medium};
    `}
`;
