import styled from 'styled-components';
import {
  TypographyProps,
  TypographyVariants,
} from '../../../../types/Typography';

import { DefaultTheme } from 'styled-components';

export const getTypographyStyles = (
  theme: DefaultTheme,
  variant: TypographyVariants,
) => {
  const typographyMap = {
    [TypographyVariants.H1]: {
      fontSize: theme.typography.fontSizes.h1,
      lineHeight: theme.typography.lineHeights.h1,
      fontWeight: theme.typography.fontWeights.bold,
    },
    [TypographyVariants.H2]: {
      fontSize: theme.typography.fontSizes.h2,
      lineHeight: theme.typography.lineHeights.h2,
      fontWeight: theme.typography.fontWeights.bold,
    },
    [TypographyVariants.H3]: {
      fontSize: theme.typography.fontSizes.h3,
      lineHeight: theme.typography.lineHeights.h3,
      fontWeight: theme.typography.fontWeights.bold,
    },
    [TypographyVariants.BodyLarge]: {
      fontSize: theme.typography.fontSizes.bodyLarge,
      lineHeight: theme.typography.lineHeights.bodyLarge,
      fontWeight: theme.typography.fontWeights.regular,
    },
    [TypographyVariants.BodySmall]: {
      fontSize: theme.typography.fontSizes.bodySmall,
      lineHeight: theme.typography.lineHeights.bodySmall,
      fontWeight: theme.typography.fontWeights.regular,
    },
    [TypographyVariants.Caption]: {
      fontSize: theme.typography.fontSizes.caption,
      lineHeight: theme.typography.lineHeights.caption,
      fontWeight: theme.typography.fontWeights.regular,
    },
  };

  return typographyMap[variant] || typographyMap[TypographyVariants.BodySmall];
};

export const StyledTypography = styled.p<TypographyProps>`
  ${({ theme, variant }) => {
    const { fontSize, lineHeight, fontWeight } = getTypographyStyles(
      theme,
      variant,
    );
    return `
      font-size: ${fontSize};
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
      font-family: ${theme.typography.fontFamily};
      color: inherit;
    `;
  }}
`;
