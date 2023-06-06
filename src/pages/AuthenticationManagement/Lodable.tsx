/**
 * Asynchronously loads the component for Authentication Pages
 */

import * as React from 'react';
import { loadable } from 'utils';
import { LoadingIndicator } from 'components';

export const AuthenticationManagement = loadable(() => import('./index'), {
  fallback: <LoadingIndicator visible />
});
