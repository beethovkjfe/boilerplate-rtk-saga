import { AuthenticationManagement, DashboardManagement } from 'pages';

export const pageRoutes = {
  private: [{ component: DashboardManagement, path: '/dashboard' }],
  public: [
    { path: '/', component: AuthenticationManagement, section: 'login' },
    { path: '/login', component: AuthenticationManagement, section: 'login' },
    { path: '/register', component: AuthenticationManagement, section: 'register' }
  ]
};
