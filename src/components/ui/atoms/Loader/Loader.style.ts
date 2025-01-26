import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  justify-content: center;
  min-height: 160px;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.neutral.extraLight};
  border-top-color: ${({ theme }) => theme.colors.secondary.medium};
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;
