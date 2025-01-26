import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
  border-radius: 8px;
  min-width: 160px;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  z-index: 9999;
`;

export const DropdownItemWrapper = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.extraLight};
  }
`;
