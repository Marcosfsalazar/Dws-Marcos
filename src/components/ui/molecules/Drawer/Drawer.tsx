import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  Overlay,
  DrawerWrapper,
  DrawerHeader,
  DrawerContent,
  CloseButton,
  DrawerItemWrapper,
} from './Drawer.style';
import { Button } from '../../atoms/Button';
import { ButtonVariants } from '../../../../types/Button';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import {
  DrawerProps,
  IDrawerContext,
  DrawerButtonProps,
  DrawerHeaderProps,
  DrawerContentProps,
  DrawerItemProps,
} from '../../../../types/Drawer';

const DrawerContext = createContext<IDrawerContext | null>(null);

function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error('Drawer subcomponent must be used within <Drawer>.');
  }
  return ctx;
}

function Drawer({ children }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const arrayChildren = React.Children.toArray(children);

  const buttonSlot = arrayChildren.find(
    (child: any) => child.type === DrawerButton,
  );
  const overlaySlot = arrayChildren.filter(
    (child: any) => child.type !== DrawerButton,
  );

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => {
    if (isOpen) close();
  });

  return (
    <DrawerContext.Provider value={{ isOpen, open, close, toggle }}>
      {buttonSlot}

      <Overlay $isOpen={isOpen}>
        <DrawerWrapper ref={wrapperRef} onClick={(e) => e.stopPropagation()}>
          {overlaySlot}
        </DrawerWrapper>
      </Overlay>
    </DrawerContext.Provider>
  );
}

function DrawerButton({
  children,
  onClick,
  variant = ButtonVariants.DROPDOWN,
}: DrawerButtonProps) {
  const { toggle } = useDrawerContext();
  const handleClick = () => {
    onClick?.();
    toggle();
  };
  return (
    <Button variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
}

function DrawerHeaderComp({ children }: DrawerHeaderProps) {
  const { close } = useDrawerContext();
  return (
    <DrawerHeader>
      <CloseButton onClick={close}>&larr;</CloseButton>
      {children}
    </DrawerHeader>
  );
}

function DrawerContentComp({ children }: DrawerContentProps) {
  return <DrawerContent>{children}</DrawerContent>;
}

function DrawerItem({ children, onClick }: DrawerItemProps) {
  const { close } = useDrawerContext();
  const handleClick = () => {
    onClick?.();
    close();
  };
  return (
    <DrawerItemWrapper onClick={handleClick}>{children}</DrawerItemWrapper>
  );
}

Drawer.Button = DrawerButton;
Drawer.Header = DrawerHeaderComp;
Drawer.Content = DrawerContentComp;
Drawer.Item = DrawerItem;

export default Drawer;
