import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import { Env } from 'config';
import { rootSaga } from './rootSaga';
import { rootReducer, routerMiddleware, createReduxHistory } from './rootReducer';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    devTools: Env.isDev(),
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(routerMiddleware).concat(logger)
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const history = createReduxHistory(store);
