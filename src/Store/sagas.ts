//effects
import { all, fork } from 'redux-saga/effects';

//watchers
import { cancelGoodsWatcher, getDocumentsWatcher } from './documents/sagas';

export default function* rootSaga() {
  yield all([fork(getDocumentsWatcher), fork(cancelGoodsWatcher)]);
}
