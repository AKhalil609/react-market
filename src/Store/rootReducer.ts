import { combineReducers } from 'redux';

import itemReducer from './items/reducer';

const rootReducer = combineReducers({
    item: itemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;