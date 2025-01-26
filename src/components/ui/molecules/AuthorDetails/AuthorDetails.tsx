import { format } from 'date-fns';
import { TypographyVariants } from '../../../../types/Typography';
import { Typography } from '../../atoms/Typography';
import {
  AuthorDate,
  AuthorDetailsContainer,
  AuthorName,
  InfoContainer,
} from './AuthorDetails.styled';
import { ptBR } from 'date-fns/locale';

interface AuthorDetails {
  name: string;
  createdAt: string;
  authorImage: string;
}

const AuthorDetails = ({ name, createdAt, authorImage }: AuthorDetails) => {
  return (
    <AuthorDetailsContainer>
      <img src={authorImage} alt="author profile pic" width={40} height={40} />
      <InfoContainer>
        <Typography variant={TypographyVariants.BodySmall}>
          Written by: <AuthorName>{name}</AuthorName>
        </Typography>
        <Typography variant={TypographyVariants.Caption}>
          <AuthorDate>
            {format(createdAt, 'MMM dd, yyyy', { locale: ptBR })}
          </AuthorDate>
        </Typography>
      </InfoContainer>
    </AuthorDetailsContainer>
  );
};

export default AuthorDetails;
