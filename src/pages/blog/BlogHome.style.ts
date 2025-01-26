import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0 16px;
  padding: 16px;
  justify-items: center;
  align-items: start;
  height: 100vh;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 8fr;
  }
`;
