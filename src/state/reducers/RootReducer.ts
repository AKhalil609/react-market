import {combineReducers} from 'redux';
import marketReducer from './MarketReducer';

const RootReducer = combineReducers({
    items: marketReducer
});

export default RootReducer;