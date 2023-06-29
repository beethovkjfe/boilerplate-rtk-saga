import React from 'react';

import { NativeLogin, Registration } from './containers';
import { AuthManagementProps } from './types';

const AuthenticationManagement = ({ section = 'login' }: AuthManagementProps) => {
  const RenderAuthComponent = {
    login: NativeLogin,
    register: Registration
  }[section];
  return (
    <>
      <RenderAuthComponent />
    </>
  );
};

export default AuthenticationManagement;
