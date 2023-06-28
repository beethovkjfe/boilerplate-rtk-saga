import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import React from 'react';

import { TextInputProps } from './types';

const TextInput = ({ name, control, label, placeholder, errors, variant = 'filled' }: TextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <FormLabel className="font-semibold mb-6">{label}</FormLabel>
          <TextField
            {...field}
            placeholder={placeholder}
            variant={variant}
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!errors[name]}
            helperText={errors?.[name]?.message}
          />
          <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default TextInput;
