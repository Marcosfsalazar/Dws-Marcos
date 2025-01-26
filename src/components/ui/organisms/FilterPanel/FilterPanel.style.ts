import styled from 'styled-components';
import { StyledButton } from '../../atoms/Button/Button.style';

export const FiltersContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export const FilterPanelContainer = styled.aside`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

export const AccentIcon = styled.span`
  color: ${({ theme }) => theme.colors.accent1.medium};

  ${StyledButton}:hover & {
    color: inherit;
  }
`;

export const CloseButton = styled.div`
  border: none;
  color: none;
  cursor: pointer;
`;
