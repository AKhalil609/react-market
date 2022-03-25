import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SORT_ITEMS,
    ADD_BRAND_FILTER,
    REMOVE_BRAND_FILTER,
    REMOVE_TAG_FILTER,
    ADD_TAG_FILTER,
    SHOW_BASKET,
} from './actionTypes';

import { ItemActions, ItemState } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialState: ItemState = {
    pending: false,
    items: [],
    cart: [],
    total: 0,
    error: null,
    brandFilter: [],
    tagFilter: [],
    showBasket: false,
};

const dynamicsort = (property: string, order: boolean) => {
    let sort_order = -1;
    if (order) {
        sort_order = 1;
    }
    return function (a: any, b: any) {
        // a should come before b in the sorted order
        if (a[property] < b[property]) {
            return -1 * sort_order;
            // a should come after b in the sorted order
        } else if (a[property] > b[property]) {
            return 1 * sort_order;
            // a and b are the same
        } else {
            return 0 * sort_order;
        }
    };
};

export default (state = initialState, action: ItemActions) => {
    switch (action.type) {
    case FETCH_ITEM_REQUEST:
        return {
            ...state,
            pending: true,
        };
    case FETCH_ITEM_SUCCESS:
        return {
            ...state,
            pending: false,
            items: action.payload.items.map((item) => {
                return { ...item, _id: item._id ||uuidv4() };
            }),
            error: null,
        };
    case FETCH_ITEM_FAILURE:
        return {
            ...state,
            pending: false,
            items: [],
            error: action.payload.error,
        };
    case ADD_TO_CART:
        if (!state.cart.length) {
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price,
            };
        } else {
            let check = false;
            state.cart.map((item: any, key: number) => {

                if (item.id == action.payload.id) {
                    state.cart[key].quantity++;
                    check = true;
                }
            });
            if (!check) {
                const _cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    price: action.payload.price,
                };
                state.cart.push(_cart);
            }
        }
        return {
            ...state,
            cart: [...state.cart],
            total: state.total + action.payload.price,
        };
    case REMOVE_FROM_CART:
        if (!state.cart.length) {
            return {
                ...state,
            };
        } else {
            state.cart.map((item: any, key: number) => {
                if (item.id == action.payload.id) {
                    state.cart[key].quantity--;
                    if (state.cart[key].quantity === 0) {
                        state.cart.splice(key, 1);
                    }
                }
            });
        }
        return {
            ...state,
            cart: [...state.cart],
            total: state.total - action.payload.price,
        };
    case SORT_ITEMS:
        state.pending = true;
        return {
            ...state,
            items: [
                ...state.items.sort(
                    dynamicsort(
                        action.payload.key,
                        action.payload.ascending
                    )
                ),
            ],
            pending: false,
        };
    case ADD_BRAND_FILTER:
        return {
            ...state,
            brandFilter:
                    action.payload.filterElement === 'All'
                        ? []
                        : [...state.brandFilter, action.payload.filterElement],
        };
    case REMOVE_BRAND_FILTER:
        return {
            ...state,
            brandFilter: [...state.brandFilter].filter(
                (brand) => brand !== action.payload.filterElement
            ),
        };
    case ADD_TAG_FILTER:
        return {
            ...state,
            tagFilter:
                    action.payload.filterElement === 'All'
                        ? []
                        : [...state.tagFilter, action.payload.filterElement],
        };
    case REMOVE_TAG_FILTER:
        return {
            ...state,
            tagFilter: [...state.tagFilter].filter(
                (tag) => tag !== action.payload.filterElement
            ),
        };
    case SHOW_BASKET:
        return {
            ...state,
            showBasket: !state.showBasket
        };
    default:
        return {
            ...state,
        };
    }
};
