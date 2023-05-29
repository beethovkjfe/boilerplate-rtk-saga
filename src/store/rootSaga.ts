import { all } from 'redux-saga/effects';

import appManagementWatcherSaga from 'pages/AppManagement/saga';

export function* rootSaga() {
  yield all([appManagementWatcherSaga()]);
}

export default rootSaga;
