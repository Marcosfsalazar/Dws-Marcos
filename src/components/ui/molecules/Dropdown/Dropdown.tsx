import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from 'react';
import {
  DropdownWrapper,
  DropdownMenuWrapper,
  DropdownItemWrapper,
} from './Dropdown.style';
import {
  DropdownProps,
  DropdownButtonProps,
  DropdownMenuProps,
  DropdownItemProps,
  IDropdownContext,
} from '../../../../types/Dropdown';
import { Button } from '../../atoms/Button';
import { ButtonVariants } from '../../../../types/Button';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';

const DropdownContext = createContext<IDropdownContext | null>(null);

function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error(
      'Dropdown compound components must be used within a <Dropdown> parent.',
    );
  }
  return ctx;
}

function Dropdown({ children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => {
    if (isOpen) {
      close();
    }
  });

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <DropdownWrapper ref={dropdownRef}>{children}</DropdownWrapper>
    </DropdownContext.Provider>
  );
}

function DropdownButton({
  children,
  onClick,
  variant = ButtonVariants.DROPDOWN,
}: DropdownButtonProps) {
  const { toggle } = useDropdownContext();

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

function DropdownMenu({ children }: DropdownMenuProps) {
  const { isOpen } = useDropdownContext();
  return <DropdownMenuWrapper isOpen={isOpen}>{children}</DropdownMenuWrapper>;
}

function DropdownItem({ children, onClick }: DropdownItemProps) {
  const { close } = useDropdownContext();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <DropdownItemWrapper onClick={handleClick}>{children}</DropdownItemWrapper>
  );
}

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
