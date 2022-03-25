import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchCompanyFailure, fetchCompanySuccess } from './actions';
import { FETCH_COMPANY_REQUEST } from './actionTypes';
import { ICompany } from './types';

const getCompanies = (): Promise<ICompany[]> => {
    return axios.get(
        'https://my-json-server.typicode.com/AKhalil609/demo/companies'
    );
};

/*
  Worker Saga: Fired on FETCH_COMPANY_REQUEST action
*/
function* fetchCompanySaga() {
    try {
        console.log('request');

        const response: AxiosResponse<ICompany[]> = yield call(getCompanies);
        yield put(
            fetchCompanySuccess({
                companies: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchCompanyFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_COMPANY_REQUEST` action.
  Allows concurrent increments.
*/
function* companieSaga() {
    yield all([takeLatest(FETCH_COMPANY_REQUEST, fetchCompanySaga)]);
}

export default companieSaga;
