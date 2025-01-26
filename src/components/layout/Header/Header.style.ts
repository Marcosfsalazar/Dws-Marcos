import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: end;
`;
