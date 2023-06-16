import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';
import { pageRoutes } from './config';
import { PublicRoute } from './PublicRoute';

export const Routes = (props: any) => {
  return (
    <Switch>
      {pageRoutes.public.map((route, ind) => (
        <PublicRoute exact {...route} {...props} key={ind} />
      ))}
      {pageRoutes.private.map((route, ind) => (
        <PrivateRoute exact {...route} {...props} key={ind} />
      ))}
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};
