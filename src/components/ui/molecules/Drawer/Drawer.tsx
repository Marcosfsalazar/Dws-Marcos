import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  Overlay,
  DrawerWrapper,
  DrawerHeader,
  DrawerContent,
  DrawerItemWrapper,
  CloseButtonWrapper,
  DrawerListContainer,
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
  isOpen,
}: DrawerButtonProps) {
  const { toggle } = useDrawerContext();
  const handleClick = () => {
    onClick?.();
    toggle();
  };
  return (
    !isOpen && (
      <Button variant={variant} onClick={handleClick}>
        {children}
      </Button>
    )
  );
}

function DrawerHeaderComp({ children }: DrawerHeaderProps) {
  return <DrawerHeader>{children}</DrawerHeader>;
}

function DrawerContentComp({ children }: DrawerContentProps) {
  return <DrawerContent>{children}</DrawerContent>;
}

function DrawerList({ children }: DrawerContentProps) {
  return <DrawerListContainer>{children}</DrawerListContainer>;
}

function CloseButton() {
  const { close } = useDrawerContext();
  return <CloseButtonWrapper onClick={close}>&larr;</CloseButtonWrapper>;
}

function CloseWrapper({ children, onClick }: DrawerItemProps) {
  const { close } = useDrawerContext();
  function handleClick() {
    onClick && onClick();
    close();
  }
  return (
    <CloseButtonWrapper onClick={handleClick}>{children}</CloseButtonWrapper>
  );
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
Drawer.CloseButton = CloseButton;
Drawer.CloseWrapper = CloseWrapper;
Drawer.List = DrawerList;

export default Drawer;
