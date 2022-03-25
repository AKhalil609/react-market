import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SORT_ITEMS,
    ADD_BRAND_FILTER,
    ADD_TAG_FILTER,
    REMOVE_BRAND_FILTER,
    REMOVE_TAG_FILTER,
} from './actionTypes';

export interface IItem {
    _id: string
    tags: string[]
    price: number
    name: string
    description: string
    slug: string
    added: number
    manufacturer: string
    itemType: string
}

export interface ItemState {
    pending: boolean
    items: IItem[]
    cart: AddItemPayload[]
    error: string | null
    total: number
    brandFilter: string[]
    tagFilter: string[]
}

export interface FetchItemsSuccessPayload {
    items: IItem[]
}

export interface AddItemPayload {
    id: string
    quantity: number
    name: string
    price: number
    total?: number
}

export interface SortPayload {
    key: string
    ascending: boolean
}

export interface FilterBrandPayload {
  filterElement: string;
  filterType: string;
}

export interface FilterTagPayload {
  filterElement: string;
  filterType: string;
}

export interface FetchItemsFailurePayload {
    error: string
}

export interface FetchItemsRequest {
    type: typeof FETCH_ITEM_REQUEST
}

export type FetchItemsSuccess = {
    type: typeof FETCH_ITEM_SUCCESS
    payload: FetchItemsSuccessPayload
}

export type FetchItemsFailure = {
    type: typeof FETCH_ITEM_FAILURE
    payload: FetchItemsFailurePayload
}

export type AddItem = {
    type: typeof ADD_TO_CART
    payload: AddItemPayload
}

export type RemoveItem = {
    type: typeof REMOVE_FROM_CART
    payload: AddItemPayload
}

export type SortItems = {
    type: typeof SORT_ITEMS
    payload: SortPayload
}

export type AddFilterBrand = {
  type: typeof ADD_BRAND_FILTER
  payload: FilterBrandPayload
}

export type RemoveFilterBrand = {
  type: typeof REMOVE_BRAND_FILTER
  payload: FilterBrandPayload
}

export type AddFilterTag = {
  type: typeof ADD_TAG_FILTER
  payload: FilterTagPayload
}

export type RemoveFilterTag = {
  type: typeof REMOVE_TAG_FILTER
  payload: FilterBrandPayload
}

export type ItemActions =
    | FetchItemsRequest
    | FetchItemsSuccess
    | FetchItemsFailure
    | AddItem
    | SortItems
    | RemoveItem
    | AddFilterBrand
    | RemoveFilterBrand
    | AddFilterTag
    | RemoveFilterTag
