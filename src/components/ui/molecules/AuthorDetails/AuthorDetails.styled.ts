import styled from 'styled-components';

export const AuthorDetailsContainer = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

export const InfoContainer = styled(AuthorDetailsContainer)`
  flex-direction: column;
  align-items: start;
`;

export const AuthorName = styled.span`
  font-weight: bold;
`;

export const AuthorDate = styled.span`
  color: ${({ theme }) => theme.colors.neutral.dark};
`;
