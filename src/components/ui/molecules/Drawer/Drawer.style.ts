import styled from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const DrawerWrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};

  display: flex;
  flex-direction: column;
`;

export const DrawerHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};

  input {
    flex: 1;
    border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
    padding: 8px 12px;
    border-radius: 24px;
    outline: none;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 1.25rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.medium};
  }
`;

export const DrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  > ul {
    list-style-type: none;
  }
`;

export const DrawerItemWrapper = styled.li`
  cursor: pointer;
  padding: 8px 12px;
  width: 100%;
  border: 1px solid red;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.extraLight};
  }
`;
