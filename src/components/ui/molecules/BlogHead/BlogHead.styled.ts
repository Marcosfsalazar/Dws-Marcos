import styled from 'styled-components';
import { StyledButton } from '../../atoms/Button/Button.style';

export const BlogHeadContainer = styled.div`
  width: 100vw;
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
`;

export const AccentIcon = styled.span`
  color: ${({ theme }) => theme.colors.accent1.medium};

  ${StyledButton}:hover & {
    color: inherit;
  }
`;
