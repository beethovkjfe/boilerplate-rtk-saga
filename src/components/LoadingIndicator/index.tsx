import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

import { LoadingIndicatorProps } from './types';

const LoadingIndicator = ({ visible = false }: LoadingIndicatorProps) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={visible}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingIndicator;
