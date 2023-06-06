import { AuthenticationManagement, DashboardManagement } from 'pages';

export const pageRoutes = {
  private: [{ component: DashboardManagement, path: '/dashboard' }],
  public: [{ component: AuthenticationManagement, path: '/login' }]
};
