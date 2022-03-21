import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { fetchItems } from '../services/itemsServices';
import * as actionCreators from '../actions/MarketActions';
import * as actionTypes from '../actions/MarketActionTypes';

function* onLoadItems() {
    try {
        yield put(actionCreators.getItems());
        const { data } = yield call(fetchItems);
        yield put(actionCreators.itemsSuccess(data.items));
    } catch (error) {
        console.log(error);
      
    }
}

function* watchOnLoadItems() {
    yield takeEvery(actionTypes.GET_ITEMS, onLoadItems);
}

export default function* itemsSaga() {
    yield all([fork(watchOnLoadItems)]);
}
