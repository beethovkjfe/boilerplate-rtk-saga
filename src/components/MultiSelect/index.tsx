import { Box, Chip, FormControl, FormHelperText, FormLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import React from 'react';

import Placeholder from '../Placeholder';

import { MultiSelectProps } from './types';

function MultiSelect({
  control,
  label,
  placeholder,
  id,
  errors,
  items,
  propertyId = 'id',
  propertyText = 'name',
  name,
  variant = 'filled'
}: MultiSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl>
          <FormLabel id={id} className="font-semibold mb-6">
            {label}
          </FormLabel>
          <Select
            {...field}
            displayEmpty
            variant={variant}
            multiple
            labelId={id}
            required
            fullWidth
            error={!!errors.category}
            renderValue={selected => {
              if (selected.length === 0) {
                return <Placeholder text={placeholder} />;
              }

              return (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: any) => (
                    <Chip
                      className="pre-wrap-chip"
                      key={value}
                      label={items.find((item: any) => item[propertyId] === value)[propertyText]}
                    />
                  ))}
                </Box>
              );
            }}
          >
            {items?.map((item: any) => (
              <MenuItem key={item[propertyId]} value={item[propertyId]}>
                {item[propertyText]}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
export default MultiSelect;
