import { GET_ITEMS, ItemsDispatchTypes, ITEMS_FAIL, ITEMS_LOADING, ITEMS_SUCCESS, MarketItem, SET_ITEMS } from '../actions/MarketActionTypes';

interface DefaultStateI {
    loading: boolean,
    items?: MarketItem[],
}

const defaultState: DefaultStateI = {
    loading: false
};

const marketReducer = (state: DefaultStateI = defaultState, action: ItemsDispatchTypes): DefaultStateI => {
    switch (action.type) {
    case SET_ITEMS:
    case ITEMS_SUCCESS:
        return {
            loading: false,
            items: action.payload
        };
    case ITEMS_FAIL:
        return {
            loading: false,
        };
    case ITEMS_LOADING:
        return {
            loading: true,
        };
    default:
        return state;
    }
};

export default marketReducer;