import { all, fork } from 'redux-saga/effects';
import itemsSaga from './itemsSaga';

export default function* rootSaga() {
    yield all([fork(itemsSaga)]);
}
