import styled from 'styled-components';
import { StyledButton } from '../../atoms/Button/Button.style';

export const FilterPanelContainer = styled.aside`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FiltersContainer = styled.section`
  display: flex;
  gap: 4px;
`;

export const AccentIcon = styled.span`
  color: ${({ theme }) => theme.colors.accent1.medium};

  ${StyledButton}:hover & {
    color: inherit;
  }
`;
