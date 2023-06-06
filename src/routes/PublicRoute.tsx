import React from 'react';

export const PublicRoute = ({ component: Component, ...rest }: any) => <Component {...rest} />;
