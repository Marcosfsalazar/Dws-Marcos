import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

export interface CardImageProps {
  src: string;
  alt?: string;
}

export interface CardDateAuthorProps {
  date: string;
  author: string;
}

export interface CardContentProps {
  children: ReactNode;
}

export interface CardTitleProps {
  children: ReactNode;
}

export interface CardDescriptionProps {
  children: ReactNode;
}

export interface CardCategoriesProps {
  children: ReactNode;
}
