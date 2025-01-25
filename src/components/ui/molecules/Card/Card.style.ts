import styled from 'styled-components';

export const CardRoot = styled.article`
  width: 314px;
  height: auto;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 196px;
  overflow: hidden;
`;

export const CardDateWrapper = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.neutral.dark};
  gap: 8px;
`;

export const CardDatePoint = styled.span`
  color: ${({ theme }) => theme.colors.secondary.medium};
  font-size: 20px;
`;

export const CardImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 229px;
  padding: 16px;
  gap: 16px;
`;

export const DateAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: ${({ theme }) => theme.typography.fontSizes.bodySmall};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary.dark};
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.bodySmall};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodySmall};
  color: ${({ theme }) => theme.colors.primary.dark};
  margin: 0;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
