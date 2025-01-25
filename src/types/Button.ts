export enum ButtonVariants {
  DROPDOWN = 'dropwdown',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  FILTER = 'filter',
  SEARCH = 'search',
  SORT = 'sort',
}

interface buttonHover {
  bgColor?: string;
  color?: string;
  border?: string;
}

export interface ButtonStyleProps {
  width: number;
  height: number;
  bgColor?: string;
  color?: string;
  fontWeight?: number;
  padding?: string;
  fontSize?: string;
  border?: string;
  borderRadius?: number;
  hover: buttonHover;
}

export interface ButtonProps {
  variant: ButtonVariants;
  children: React.ReactNode;
  color?: string;
  isActive?: boolean;
  as?: React.ElementType;
}

export type ButtonMapType = {
  [key in ButtonVariants]: Partial<ButtonStyleProps>;
};
