import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SORT_ITEMS,
    ADD_BRAND_FILTER,
    ADD_TAG_FILTER,
    REMOVE_BRAND_FILTER,
    REMOVE_TAG_FILTER,
} from './actionTypes';
import {
    FetchItemsRequest,
    FetchItemsSuccess,
    FetchItemsSuccessPayload,
    FetchItemsFailure,
    FetchItemsFailurePayload,
    AddItemPayload,
    AddItem,
    RemoveItem,
    SortItems,
    SortPayload,
    AddFilterBrand,
    FilterBrandPayload,
    FilterTagPayload,
    AddFilterTag,
    RemoveFilterBrand,
    RemoveFilterTag,
} from './types';
  
export const fetchItemRequest = (): FetchItemsRequest => ({
    type: FETCH_ITEM_REQUEST,
});
  
export const fetchItemSuccess = (
    payload: FetchItemsSuccessPayload
): FetchItemsSuccess => ({
    type: FETCH_ITEM_SUCCESS,
    payload,
});
  
export const fetchItemFailure = (
    payload: FetchItemsFailurePayload
): FetchItemsFailure => ({
    type: FETCH_ITEM_FAILURE,
    payload,
});

export const addItem = (
    payload: AddItemPayload
): AddItem => ({
    type: ADD_TO_CART,
    payload
});

export const removeItem = (
    payload: AddItemPayload
): RemoveItem => ({
    type: REMOVE_FROM_CART,
    payload
});

export const sortItems = (
    payload: SortPayload
): SortItems => ({
    type: SORT_ITEMS,
    payload
});

export const addBrandFilter = (
    payload: FilterBrandPayload
): AddFilterBrand => ({
    type: ADD_BRAND_FILTER,
    payload
});

export const removeBrandFilter = (
    payload: FilterBrandPayload
): RemoveFilterBrand => ({
    type: REMOVE_BRAND_FILTER,
    payload
});

export const addTagFilter = (
    payload: FilterTagPayload
): AddFilterTag => ({
    type: ADD_TAG_FILTER,
    payload
});

export const removeTagFilter = (
    payload: FilterTagPayload
): RemoveFilterTag => ({
    type: REMOVE_TAG_FILTER,
    payload
});
