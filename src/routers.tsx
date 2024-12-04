import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout element={<HomePage />} />,
  },
]);