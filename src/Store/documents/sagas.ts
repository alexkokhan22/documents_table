//effects
import { call, put, takeEvery } from 'redux-saga/effects';

//actions type
import {
  CANCEL_GOODS_ASYNC,
  GET_DOCUMENTS,
  GET_DOCUMENTS_ASYNC,
} from './actions';

//services
import {
  cancelGoodsService,
  getFirstDocumentsService,
  getSecondDocumentsService,
} from './services';

//types
import { SagaIterator } from 'redux-saga';
import { IParamsSagas } from './models';

export function* getDocumentsWorker(): SagaIterator {
  try {
    const firstDocuments = yield call(getFirstDocumentsService);
    const secondDocuments = yield call(getSecondDocumentsService);
    yield put({
      type: GET_DOCUMENTS,
      payload: [...firstDocuments, ...secondDocuments],
    });
  } catch (e) {
    console.log(e);
  }
}

export function* getDocumentsWatcher(): Generator {
  yield takeEvery(GET_DOCUMENTS_ASYNC, getDocumentsWorker);
}

export function* cancelGoodsWorker(params: IParamsSagas): SagaIterator {
  try {
    yield call(cancelGoodsService, params.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* cancelGoodsWatcher(): Generator {
  yield takeEvery(CANCEL_GOODS_ASYNC, cancelGoodsWorker);
}
