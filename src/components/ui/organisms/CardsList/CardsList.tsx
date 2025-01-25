import { ReactNode } from 'react';
import { ListGrid, ListItem } from './CardsList.style';

const CardsList = ({ posts }: { posts: ReactNode[] }) => {
  return (
    <ListGrid>
      {posts.map((post, index) => (
        <ListItem key={index}>{post}</ListItem>
      ))}
    </ListGrid>
  );
};

export default CardsList;
