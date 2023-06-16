import { Button } from '@mui/material';
import React from 'react';

interface LoadingStateButtonProps {
  label: string;
  type?: 'button' | 'submit';
  size?: 'large' | 'small' | 'medium';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  isLoading: boolean;
  className: string;
}

const LoadingStateButton = ({
  label,
  type = 'button',
  size = 'large',
  onClick,
  disabled = false,
  isLoading = false,
  className = ''
}: LoadingStateButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className={className}
      aria-label={label}
      type={type}
      size={size}
      disabled={disabled}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {isLoading ? <div className="btn-loading">Loading ...</div> : label}
    </Button>
  );
};

export default LoadingStateButton;
