import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import React from 'react';

import * as Actions from './slice';

const AuthenticationManagement = () => {
  const dispatch = useDispatch();

  return (
    <>
      Auth management
      <Button onClick={() => dispatch(Actions.login())}>Authenticate</Button>
    </>
  );
};

export default AuthenticationManagement;
