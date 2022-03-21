
import { composeWithDevTools } from '@redux-devtools/extension';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';
import itemsSaga from './sagas/itemsSaga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleware)) ,);

export type RootStore = ReturnType<typeof RootReducer>

sagaMiddleware.run(rootSaga);

export default Store;