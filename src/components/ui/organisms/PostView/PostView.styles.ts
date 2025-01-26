import styled from 'styled-components';

export const DetailContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  text-justify: left;
`;

export const LatestArticlesWrapper = styled.div`
  margin-top: 40px;

  > h2 {
    margin-bottom: 16px;
  }
`;
