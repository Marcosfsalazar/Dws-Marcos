import styled from 'styled-components';

export const ListGrid = styled.ul`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 16px;
  margin: 16px;
  padding: 0;
  padding-bottom: 16px;
  list-style: none;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1279px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
