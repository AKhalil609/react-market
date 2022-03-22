import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
} from './actionTypes';
import {
    FetchItemsRequest,
    FetchItemsSuccess,
    FetchItemsSuccessPayload,
    FetchItemsFailure,
    FetchItemsFailurePayload,
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