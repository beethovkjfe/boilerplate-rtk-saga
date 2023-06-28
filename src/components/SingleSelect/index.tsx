import { FormControl, FormHelperText, FormLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import React from 'react';

import Placeholder from '../Placeholder';
import { SingleSelectProps } from './types';

function SingleSelect({
  control,
  label,
  placeholder,
  id,
  errors,
  items,
  propertyId = 'id',
  propertyText = 'name',
  name
}: SingleSelectProps) {
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
            variant="filled"
            displayEmpty
            labelId={id}
            required
            fullWidth
            renderValue={selected => {
              if (!selected) {
                return <Placeholder text={placeholder} />;
              }

              const selectedItem = items.find((item: any) => item[propertyId] === selected);
              return selectedItem[propertyText];
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
export default SingleSelect;
