import { Route, Routes } from 'react-router-dom';
import BlogContainer from '../pages/blog';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<BlogContainer />} />
    </Routes>
  );
};
