import { all } from 'redux-saga/effects';

import appManagementWatcherSaga from 'pages/AppManagement/saga';
import authManagementWatcherSaga from 'pages/AuthenticationManagement/saga';

export function* rootSaga() {
  yield all([appManagementWatcherSaga(), authManagementWatcherSaga()]);
}

export default rootSaga;
