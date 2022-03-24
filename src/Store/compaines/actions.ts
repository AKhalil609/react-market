import {
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_FAILURE,
    FETCH_COMPANY_SUCCESS,
} from './actionTypes';
import {
    FetchCompaniesRequest,
    FetchCompaniesSuccess,
    FetchCompaniesSuccessPayload,
    FetchCompaniesFailure,
    FetchCompaniesFailurePayload,
} from './types';
  
export const fetchCompanyRequest = (): FetchCompaniesRequest => ({
    type: FETCH_COMPANY_REQUEST,
});
  
export const fetchCompanySuccess = (
    payload: FetchCompaniesSuccessPayload
): FetchCompaniesSuccess => ({
    type: FETCH_COMPANY_SUCCESS,
    payload,
});
  
export const fetchCompanyFailure = (
    payload: FetchCompaniesFailurePayload
): FetchCompaniesFailure => ({
    type: FETCH_COMPANY_FAILURE,
    payload,
});