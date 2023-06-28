import { ButtonProps } from '@mui/material';

export interface LoadingStateButtonProps extends ButtonProps {
  isLoading: boolean;
  label: string;
}
