import { AuthTabs, ForgotPassword, ResetPassword } from './pages/auth';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AuthTabs />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
  ]);

  return element;
};
