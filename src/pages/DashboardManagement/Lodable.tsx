/**
 * Asynchronously loads the component for Dashboard Page
 */

import * as React from 'react';
import { loadable } from 'utils';
import { LoadingIndicator } from 'components';

export const DashboardManagement = loadable(() => import('./index'), {
  fallback: <LoadingIndicator visible />
});
