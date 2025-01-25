export enum TypographyVariants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  BodyLarge = 'bodyLarge',
  BodySmall = 'bodySmall',
  Caption = 'caption',
}

export interface TypographyProps {
  variant: TypographyVariants;
  children: React.ReactNode;
  color?: string;
  as?: React.ElementType;
}
