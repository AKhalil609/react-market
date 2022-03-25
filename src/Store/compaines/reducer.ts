import {
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_SUCCESS,
    FETCH_COMPANY_FAILURE,
} from './actionTypes';

import { CompanyActions, CompanyState } from './types';

const initialState: CompanyState = {
    pending: false,
    companies: [],
    error: null,
};

export default (state = initialState, action: CompanyActions) => {
    switch (action.type) {
    case FETCH_COMPANY_REQUEST:
        return {
            ...state,
            pending: true,
        };
    case FETCH_COMPANY_SUCCESS:
        return {
            ...state,
            pending: false,
            companies: action.payload.companies,
            error: null,
        };
    case FETCH_COMPANY_FAILURE:
        return {
            ...state,
            pending: false,
            companies: [],
            error: action.payload.error,
        };
    default:
        return {
            ...state,
        };
    }
};
