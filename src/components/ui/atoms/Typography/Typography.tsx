import { TypographyProps } from '../../../../types/Typography';
import { StyledTypography } from './Typography.style';

export function Typography({ variant, children, color, as }: TypographyProps) {
  return (
    <StyledTypography as={as || 'p'} variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
}
