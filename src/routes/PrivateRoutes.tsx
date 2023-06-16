import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  layout: Layout,
  layoutProps,
  isAuthenticated,
  ...rest
}: any): any => {
  return (
    <Route
      {...rest}
      render={(props: any): any => {
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return (
          <Layout {...layoutProps}>
            <Component {...props} {...rest} />
          </Layout>
        );
      }}
    />
  );
};
