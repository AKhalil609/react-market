import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.item.pending;

const getItems = (state: AppState) => state.item.items;

const getCartItems = (state: AppState) => state.item.cart;

const getBrandFilters = (state: AppState) => state.item.brandFilter;

const getTagFilters = (state: AppState) => state.item.tagFilter;

const getCartTotal = (state: AppState) => state.item.total;

const getError = (state: AppState) => state.item.error;

export const getItemsSelector = createSelector(getItems, (items) => items);

export const getTagsSelector = createSelector(getItems, (items) =>
    items.reduce(
        (allItems: any, item) => {
            for (let index = 0; index < item.tags.length; index++) {
                const element = item.tags[index];
                if (!allItems[element]) {
                    allItems[element] = 0;
                }
                allItems[element] += 1;
                allItems.All += 1;
            }
            return allItems;
        },
        { All: 0 }
    )
);

export const getBrandsSelector = createSelector(getItems, (items) =>
    items.reduce(
        (allItems: any, item) => {
            if (!allItems[item.manufacturer]) {
                allItems[item.manufacturer] = 0;
            }
            allItems[item.manufacturer] += 1;
            allItems.All += 1;
            return allItems;
        },
        { All: 0 }
    )
);

export const getBrandFiltersSelector = createSelector(
    getBrandFilters,
    (brands) => brands
);

export const getBrandTagsSelector = createSelector(
    getTagFilters,
    (tags) => tags
);

export const getCartItemsSelector = createSelector(
    getCartItems,
    (items) => items
);

export const getCartTotalSelector = createSelector(
    getCartTotal,
    (total) => total
);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
