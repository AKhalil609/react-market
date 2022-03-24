import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.item.pending;

const getItems = (state: AppState) => state.item.items;

const getCartItems = (state: AppState) => state.item.cart;

const getCartTotal = (state: AppState) => state.item.total;

const getError = (state: AppState) => state.item.error;

export const getItemsSelector = createSelector(getItems, (items) => items);

export const getTagsSelector = createSelector(getItems, (items) =>
    items.reduce((allItems: any, item) => {
        for (let index = 0; index < item.tags.length; index++) {
            const element = item.tags[index];
            if (!allItems[element]) {
                allItems[element] = 1;
            }
            allItems[element] += 1; 
        }
        return allItems;
    }, {})
);

export const getBrandsSelector = createSelector(getItems, (items) =>
    items.reduce((allItems: any, item) => {
        if (!allItems[item.manufacturer]) {
            allItems[item.manufacturer] = 1;
        }
        allItems[item.manufacturer] += 1; 
        return allItems;
    }, {})
);

export const getCartItemsSelector = createSelector(
    getCartItems,
    (items) => items
);

export const getCartTotalSelector = createSelector(
    getCartTotal,
    (total) => total
);

// export const getMappedItemsSelector = createSelector(getItems, (items) => new Map(items.map(i => [i._id, i])));

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
