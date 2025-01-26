import styled, { css } from 'styled-components';
import {
  ButtonMapType,
  ButtonProps,
  ButtonVariants,
} from '../../../../types/Button';
import { DefaultTheme } from 'styled-components/dist/types';

export const getButtonStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants,
) => {
  const buttonMap: ButtonMapType = {
    [ButtonVariants.DROPDOWN]: {
      minWidth: 110,
      width: 'fit-content',
      maxWidth: 220,
      height: 32,
      bgColor: theme.colors.neutral.lightest,
      color: theme.colors.secondary.medium,
      fontWeight: theme.typography.fontWeights.bold,
      fontSize: '12px',
      padding: '12px 12px 12px 16px',
      border: `1px solid ${theme.colors.secondary.medium}`,
      hover: {
        bgColor: 'rgba(211,20,80,0.05)',
      },
    },
    [ButtonVariants.PRIMARY]: {
      width: 280,
      height: 42,
      bgColor: theme.colors.secondary.medium,
      color: theme.colors.neutral.lightest,
      fontSize: theme.typography.fontSizes.bodyLarge,
      fontWeight: theme.typography.fontWeights.semiBold,
      padding: '12px',
      hover: {
        bgColor: theme.colors.secondary.dark,
      },
    },
    [ButtonVariants.SECONDARY]: {
      width: 100,
      height: 42,
      padding: '12px 16px',
      color: theme.colors.secondary.medium,
      border: `1px solid ${theme.colors.secondary.medium}`,
      fontSize: theme.typography.fontSizes.bodyLarge,
      fontWeight: theme.typography.fontWeights.semiBold,
      hover: {
        border: `1px solid ${theme.colors.secondary.dark}`,
        color: theme.colors.secondary.dark,
      },
    },
    [ButtonVariants.FILTER]: {
      borderRadius: 8,
      width: 314,
      height: 42,
      fontSize: theme.typography.fontSizes.bodySmall,
      color: theme.colors.neutral.darkest,
      hover: {
        color: theme.colors.accent1.dark,
      },
    },
    [ButtonVariants.SEARCH]: {
      width: 40,
      height: 40,
      borderRadius: 50,
      bgColor: theme.colors.primary.dark,
      color: theme.colors.neutral.lightest,
    },
    [ButtonVariants.SORT]: {
      width: 110,
      height: 32,
      color: theme.colors.neutral.extraDark,
      hover: {
        bgColor: theme.colors.accent1.medium,
        color: theme.colors.neutral.extraLight,
      },
    },
  };
  return buttonMap[variant] || buttonMap[ButtonVariants.DROPDOWN];
};

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, variant }) => {
    const {
      bgColor,
      color,
      width,
      minWidth,
      maxWidth,
      height,
      fontWeight,
      fontSize,
      border,
      padding,
      borderRadius,
      hover,
    } = getButtonStyles(theme, variant);
    return css`
      width: ${typeof width === 'number' ? `${width}px` : width};
      min-width: ${minWidth ? minWidth : width};
      max-width: ${maxWidth ? maxWidth : width};
      overflow: hidden;
      height: ${height}px;
      background-color: ${bgColor};
      color: ${color};
      border-radius: ${() => (borderRadius ? borderRadius : 42)}px;
      padding: ${padding};
      border: ${() => (border ? border : 'none')};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-weight: ${({ theme }) =>
        fontWeight ? fontWeight : theme.typography.fontWeights.regular};
      font-size: ${({ theme }) =>
        fontSize ? fontSize : theme.typography.fontSizes.bodySmall};
      &:hover {
        cursor: pointer;
        background-color: ${hover?.bgColor ? hover.bgColor : bgColor};
        color: ${hover?.color ? hover.color : color};
        border: ${hover?.border ? hover.border : border};
      }
    `;
  }}
`;
