import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
} from './actionTypes';
  
export interface IItem {
    tags: string[],
    price: number,
    name: string,
    description: string,
    slug: string,
    added: number,
    manufacturer: string,
    itemType: string
}
  
export interface ItemState {
    pending: boolean;
    items: IItem[];
    error: string | null;
  }
  
export interface FetchItemsSuccessPayload {
    items: IItem[];
  }
  
export interface FetchItemsFailurePayload {
    error: string;
  }
  
export interface FetchItemsRequest {
    type: typeof FETCH_ITEM_REQUEST;
  }
  
export type FetchItemsSuccess = {
    type: typeof FETCH_ITEM_SUCCESS;
    payload: FetchItemsSuccessPayload;
  };
  
export type FetchItemsFailure = {
    type: typeof FETCH_ITEM_FAILURE;
    payload: FetchItemsFailurePayload;
  };
  
export type ItemActions =
    | FetchItemsRequest
    | FetchItemsSuccess
    | FetchItemsFailure;