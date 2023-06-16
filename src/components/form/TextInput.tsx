import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import React from 'react';

interface TextInputProps {
  control: any;
  controllerName: string;
  label: string;
  placeholder: string;
  errors: any;
}

const TextInput = ({ controllerName, control, label, placeholder, errors }: TextInputProps) => {
  return (
    <Controller
      control={control}
      name={controllerName}
      render={({ field }) => (
        <FormControl>
          <FormLabel className="font-semibold mb-6">{label}</FormLabel>
          <TextField
            {...field}
            // label={label}
            placeholder={placeholder}
            variant="filled"
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!errors[controllerName]}
            helperText={errors?.[controllerName]?.message}
          />
          <FormHelperText error={!!errors[controllerName]}>{errors[controllerName]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default TextInput;
