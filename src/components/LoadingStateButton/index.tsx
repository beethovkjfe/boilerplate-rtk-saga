import { Button } from '@mui/material';
import React from 'react';

import { LoadingStateButtonProps } from './types';

const LoadingStateButton = ({
  label,
  type = 'button',
  size = 'large',
  disabled = false,
  isLoading = false,
  ...props
}: LoadingStateButtonProps) => {
  return (
    <Button aria-label={label} type={type} size={size} {...props}>
      {isLoading ? <div className="btn-loading">Loading ...</div> : label}
    </Button>
  );
};

export default LoadingStateButton;
