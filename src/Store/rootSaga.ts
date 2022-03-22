import { all, fork } from 'redux-saga/effects';

import itemSaga from './items/sagas';

export function* rootSaga() {
    yield all([fork(itemSaga)]);
}