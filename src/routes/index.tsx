import { Route, Routes } from 'react-router-dom';
import BlogContainer from '../pages/blog';
import MainLayout from '../components/layout/MainLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<BlogContainer />} />
      </Route>
    </Routes>
  );
};
