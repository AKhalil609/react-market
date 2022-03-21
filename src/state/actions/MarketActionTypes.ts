export const ITEMS_LOADING = 'ITEMS_LOADING';
export const ITEMS_FAIL = 'ITEMS_FAIL';
export const ITEMS_SUCCESS = 'ITEMS_SUCCESS';
export const GET_ITEMS = 'GET_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';


export type MarketItem = {
    tags: string[],
    price: number,
    name: string,
    description: string,
    slug: string,
    added: number,
    manufacturer: string,
    itemType: string
}

export interface ItemsLoading {
    type: typeof ITEMS_LOADING
}

export interface ItemsFail {
    type: typeof ITEMS_FAIL
}

export interface ItemsSuccess {
    type: typeof ITEMS_SUCCESS,
    payload: MarketItem[]
}

export interface SetItems {
    type: typeof SET_ITEMS;
    payload: MarketItem[]
}

export interface GetItems {
    type: typeof GET_ITEMS;
}

export type ItemsDispatchTypes = ItemsLoading | ItemsFail | ItemsSuccess | SetItems | GetItems