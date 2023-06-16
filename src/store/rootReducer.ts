import { combineReducers } from '@reduxjs/toolkit';
import { Env } from 'config';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import appReducer from 'pages/AppManagement/slice';
import authReducer from 'pages/AuthenticationManagement/slice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: Env.isDev(),
  savePreviousLocations: 1
});

export const rootReducer = combineReducers({
  router: routerReducer,
  appManagement: appReducer,
  authManagement: authReducer
});

export { routerMiddleware, createReduxHistory };
