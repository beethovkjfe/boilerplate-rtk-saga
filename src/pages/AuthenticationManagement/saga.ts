import { SagaIterator } from '@redux-saga/core';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import { localRedirect, setCookie } from 'utils';

import * as Actions from './slice';

export function* loginUser(): SagaIterator {
  try {
    yield call(setCookie, 'IDToken', 'true');
    yield call(localRedirect, '/dashboard');
    yield put(Actions.loginSuccess());
  } catch (error) {
    yield put(Actions.loginFailed(error));
  }
}

export function* authManagementWatcherSaga(): SagaIterator {
  yield all([yield takeLatest(Actions.login.type, loginUser)]);
}

export default authManagementWatcherSaga;
