import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary.dark};

  h3 {
    margin: 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary.medium};
    color: ${({ theme }) => theme.colors.neutral.lightest};
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;
