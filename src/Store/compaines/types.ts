import {
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_SUCCESS,
    FETCH_COMPANY_FAILURE,
} from './actionTypes';

export interface ICompany {
    slug: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    account: number
    contact: string
}

export interface CompanyState {
    pending: boolean
    companies: ICompany[]
    error: string | null
}

export interface FetchCompaniesSuccessPayload {
    companies: ICompany[]
}

export interface FetchCompaniesFailurePayload {
    error: string
}

export interface FetchCompaniesRequest {
    type: typeof FETCH_COMPANY_REQUEST
}

export type FetchCompaniesSuccess = {
    type: typeof FETCH_COMPANY_SUCCESS
    payload: FetchCompaniesSuccessPayload
}

export type FetchCompaniesFailure = {
    type: typeof FETCH_COMPANY_FAILURE
    payload: FetchCompaniesFailurePayload
}

export type CompanyActions =
    | FetchCompaniesRequest
    | FetchCompaniesSuccess
    | FetchCompaniesFailure
