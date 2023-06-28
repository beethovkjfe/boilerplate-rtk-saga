import { Button } from '@mui/material';
import React from 'react';

import { LoadingStateButtonProps } from './types';

const LoadingStateButton = ({ label, isLoading = false, ...props }: LoadingStateButtonProps) => {
  return (
    <Button aria-label={label} {...props}>
      {isLoading ? <div className="btn-loading">Loading ...</div> : label}
    </Button>
  );
};

export default LoadingStateButton;
