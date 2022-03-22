import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
} from './actionTypes';
  
import { ItemActions, ItemState } from './types';
  
const initialState: ItemState = {
    pending: false,
    items: [],
    error: null,
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
            items: action.payload.items,
            error: null,
        };
    case FETCH_ITEM_FAILURE:
        return {
            ...state,
            pending: false,
            items: [],
            error: action.payload.error,
        };
    default:
        return {
            ...state,
        };
    }
};