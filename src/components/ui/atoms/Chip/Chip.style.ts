import styled from 'styled-components';

export const Chip = styled.span<{
  width: number;
  height: number;
  bgColor?: string;
  fontSize?: string;
}>`
  display: inline-flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 42px;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.typography.fontSizes.bodySmall};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.neutral.extraLight};
  color: inherit;
`;
