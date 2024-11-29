import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { PrivateRoute } from '@/components/auth';
import { Landing } from '@/pages/Landing';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { ROUTES } from '@/constants';
import { useAuth } from '@/contexts/AuthContext';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Landing />
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
        loader: ({ request }) => {
          // Only redirect if user is already authenticated
          const auth = useAuth();
          return auth.isAuthenticated ? redirect(ROUTES.DASHBOARD) : null;
        }
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      }
    ]
  }
]); 