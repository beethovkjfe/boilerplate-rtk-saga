import { TextFieldProps } from '@mui/material';

export interface TextInputProps extends TextFieldProps<'filled'> {
  control: any;
  label: string;
  placeholder: string;
  errors: any;
  name: string;
}
