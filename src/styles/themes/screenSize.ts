import styled from 'styled-components';

export const DesktopPanel = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const MobilePanel = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;
