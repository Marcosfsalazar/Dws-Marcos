import React from 'react';
import {
  CustomSelectButton,
  DesktopItemWrapper,
  DesktopPanelWrapper,
  DesktopSectionTitle,
  DesktopSectionWrapper,
} from './SelectorCard.style';
import { ButtonVariants } from '../../../../types/Button';

interface FilterDesktopProps {
  children: React.ReactNode;
}

interface FilterDesktopSectionProps {
  label: string;
  children: React.ReactNode;
}

interface FilterDesktopItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

function SelectorCard({ children }: FilterDesktopProps) {
  return <DesktopPanelWrapper>{children}</DesktopPanelWrapper>;
}

function Section({ label, children }: FilterDesktopSectionProps) {
  return (
    <DesktopSectionWrapper>
      <DesktopSectionTitle>{label}</DesktopSectionTitle>
      {children}
    </DesktopSectionWrapper>
  );
}

function Item({ children, onClick, selected }: FilterDesktopItemProps) {
  return (
    <DesktopItemWrapper onClick={onClick}>
      <CustomSelectButton variant={ButtonVariants.FILTER} selected={selected}>
        {children}
      </CustomSelectButton>
    </DesktopItemWrapper>
  );
}

SelectorCard.Section = Section;
SelectorCard.Item = Item;

export default SelectorCard;
