import { ReactNode } from 'react';

export interface DropdownProps {
  children: ReactNode;
}

export interface DropdownButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: any;
}

export interface DropdownMenuProps {
  children: ReactNode;
}

export interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export interface IDropdownContext {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}
