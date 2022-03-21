import axios from 'axios';
import { Dispatch } from 'react';
import * as actions from './MarketActionTypes';

// export const GetItems = () => async (dispatch: Dispatch<ItemsDispatchTypes>) => {
//     try {
//         dispatch({
//             type: 'ITEMS_LOADING'
//         });

//         const res = await axios.get('https://my-json-server.typicode.com/AKhalil609/demo/items');
//         dispatch({
//             type: ITEMS_SUCCESS,
//             payload: res.data
//         });
//     } catch (e) {
//         dispatch({
//             type: ITEMS_FAIL
//         });
//     }
// };

export const setItems = (items: actions.MarketItem[]): actions.SetItems => {
    return {
        type: actions.SET_ITEMS,
        payload: items
    };
};

export const getItems = (): actions.GetItems => {
    return {
        type: actions.GET_ITEMS
    };
};

export const itemsLoading =  (): actions.ItemsLoading => {
    return {
        type: actions.ITEMS_LOADING
    };
};
  
export const itemsSuccess = (
    items: actions.MarketItem[]
): actions.ItemsSuccess => {
    return {
        type: actions.ITEMS_SUCCESS,
        payload: items
    };
};
  
export const getLyricsFailure = (): actions.ItemsFail => {
    return {
        type: actions.ITEMS_FAIL,
    };
};