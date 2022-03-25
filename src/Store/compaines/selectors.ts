import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.company.pending;

const getCompanies = (state: AppState) => state.company.companies;

const getError = (state: AppState) => state.company.error;

export const getCompaniesSelector = createSelector(
    getCompanies,
    (companies) => companies
);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
