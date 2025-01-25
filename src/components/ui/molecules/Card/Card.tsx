import { ReactNode } from 'react';
import {
  CardRoot,
  CardImageWrapper,
  CardImageElement,
  CardBody,
  DateAuthorWrapper,
  Title,
  Description,
  CategoriesWrapper,
  CardDateWrapper,
  CardDatePoint,
} from './Card.style';
import { Typography } from '../../atoms/Typography';
import { TypographyVariants } from '../../../../types/Typography';

interface CardProps {
  children: ReactNode;
}

interface CardImageProps {
  src: string;
  alt?: string;
}

interface CardDateAuthorProps {
  date: string;
  author: string;
}

interface CardContentProps {
  children: ReactNode;
}

interface CardTitleProps {
  children: ReactNode;
}

interface CardDescriptionProps {
  children: ReactNode;
}

interface CardCategoriesProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <CardRoot>{children}</CardRoot>;
}

function CardImage({ src, alt }: CardImageProps) {
  return (
    <CardImageWrapper>
      <CardImageElement src={src} alt={alt} />
    </CardImageWrapper>
  );
}

function CardDateAuthor({ date, author }: CardDateAuthorProps) {
  return (
    <DateAuthorWrapper>
      <Typography variant={TypographyVariants.Caption}>
        <CardDateWrapper>
          <span>{date}</span>
          <CardDatePoint>•</CardDatePoint>
          <span>{author}</span>
        </CardDateWrapper>
      </Typography>
    </DateAuthorWrapper>
  );
}

function CardContent({ children }: CardContentProps) {
  return <CardBody>{children}</CardBody>;
}

function CardTitle({ children }: CardTitleProps) {
  return (
    <Title>
      <Typography variant={TypographyVariants.H3}>{children}</Typography>
    </Title>
  );
}

function CardDescription({ children }: CardDescriptionProps) {
  return <Description>{children}</Description>;
}

function CardCategories({ children }: CardCategoriesProps) {
  return <CategoriesWrapper>{children}</CategoriesWrapper>;
}

Card.Image = CardImage;
Card.DateAuthor = CardDateAuthor;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Categories = CardCategories;

export default Card;
