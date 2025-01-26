import { ButtonProps } from '../../../../types/Button';
import { StyledButton } from './Button.style';

export function Button({ variant, children, color, as, onClick }: ButtonProps) {
  return (
    <StyledButton
      as={as || 'button'}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
