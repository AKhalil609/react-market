import { all, fork } from 'redux-saga/effects';

import itemSaga from './items/sagas';
import companySaga from './compaines/sagas';

export function* rootSaga() {
    yield all([fork(itemSaga), fork(companySaga)]);
}
