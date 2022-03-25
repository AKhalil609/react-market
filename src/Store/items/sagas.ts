import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchItemFailure, fetchItemSuccess } from './actions';
import { FETCH_ITEM_REQUEST } from './actionTypes';
import { IItem } from './types';

const getItems = (): Promise<IItem[]> => {
    return axios.get(
        'https://my-json-server.typicode.com/AKhalil609/demo/items'
    );
};

/*
  Worker Saga: Fired on FETCH_ITEM_REQUEST action
*/
function* fetchItemSaga() {
    try {
        const response: AxiosResponse<IItem[]> = yield call(getItems);
        yield put(
            fetchItemSuccess({
                items: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchItemFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_ITEM_REQUEST` action.
  Allows concurrent increments.
*/
function* itemSaga() {
    yield all([takeLatest(FETCH_ITEM_REQUEST, fetchItemSaga)]);
}

export default itemSaga;
