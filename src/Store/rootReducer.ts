import { combineReducers } from 'redux';

import itemReducer from './items/reducer';
import companyReducer from './compaines/reducer';

const rootReducer = combineReducers({
    item: itemReducer,
    company: companyReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
