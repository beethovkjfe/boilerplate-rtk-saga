import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import logger from 'redux-logger';

import { Env } from 'config';
import { history } from 'utils';

import { rootSaga } from './rootSaga';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const makeStore = (history: History) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: Env.isDev(),
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(routerMiddleware(history)).concat(logger)
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore(history);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
