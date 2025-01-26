import { ReactNode } from 'react';
import { ButtonVariants } from './Button';

export interface DrawerProps {
  children: ReactNode;
}

export interface IDrawerContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface DrawerButtonProps {
  children: ReactNode;
  variant?: ButtonVariants;
  onClick?: () => void;
  isOpen?: () => boolean;
}

export interface DrawerHeaderProps {
  children: ReactNode;
}

export interface DrawerContentProps {
  children: ReactNode;
}

export interface DrawerItemProps {
  children: ReactNode;
  onClick?: () => void;
}
