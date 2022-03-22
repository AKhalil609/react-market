import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.item.pending;

const getItems = (state: AppState) => state.item.items;

const getError = (state: AppState) => state.item.error;

export const getItemsSelector = createSelector(getItems, (items) => items);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);