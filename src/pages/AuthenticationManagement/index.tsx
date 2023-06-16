import { Box, Button, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from 'components/form/TextInput';
import { useForm } from 'react-hook-form';
import LoadingStateButton from 'components/form/LoadingStateButton';

import * as Actions from './slice';

const AuthenticationManagement = () => {
  const dispatch = useDispatch();

  const schemaObject = {
    name: yup.string().required('You must enter the campaign name'),
    password: yup.string().required('You must provide a value')
  };

  const defaultValues = {
    name: '',
    password: ''
  };

  const schema = yup.object().shape(schemaObject);

  const { control, formState, watch, reset, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  });

  const { isValid, errors } = formState;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          LEFT
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" flexDirection={'column'} height={'100%'} alignItems="center" justifyContent="center">
            <Typography>Welcome</Typography>

            <Typography>Please enter your login details </Typography>

            <TextInput
              controllerName="email"
              control={control}
              errors={errors}
              label="Email"
              placeholder="Enter your Email address"
            />

            <TextInput
              controllerName="password"
              control={control}
              errors={errors}
              label="Password"
              placeholder="Enter your password address"
            />

            <LoadingStateButton
              // type="button"
              label="Create"
              // size="large"
              className="rounded-4 font-16 font-semibold red-button mr-8"
              isLoading={false}
              disabled={false}
              onClick={() => {}}
            />
          </Box>
        </Grid>
      </Grid>
      Auth management
      <Button onClick={() => dispatch(Actions.login())}>Authenticate</Button>
    </>
  );
};

export default AuthenticationManagement;
