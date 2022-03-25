import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from './App';
import { ADD_BRAND_FILTER } from './Store/items/actionTypes';
import { ItemActions, ItemState } from './Store/items/types';

afterEach(cleanup);

const startingState = {
    item:{
        pending: false,
        items: [],
        cart: [],
        total: 0,
        error: null,
        brandFilter: [],
        tagFilter: [],
        showBasket: false,
    },
    company: {
        pending: false,
        companies: [],
        error: null,
    }

};

const reducer = (state = startingState, action: ItemActions) => {
    switch (action.type) {
    case ADD_BRAND_FILTER:
        return {
            ...state,
            brandFilter:
                    action.payload.filterElement === 'All'
                        ? []
                        : [...state.item.brandFilter, action.payload.filterElement],
        };
    default:
        return state;
    }
};

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(reducer, initialState) }: any = {}
)=>{
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    };
};

describe('App Component', () => { 
    it('renders with redux', ()=>{
        const { getByTestId } = renderWithRedux(<App />);
        expect(getByTestId('title')).toHaveTextContent('Products');
    }); 
    
    it('renders AppContainer with redux', ()=>{
        const { getByTestId } = renderWithRedux(<App />);
        expect(getByTestId('AppContainer')).toBeTruthy();
    }); 
    
    it('renders footer with redux', ()=>{
        const { getByTestId } = renderWithRedux(<App />);
        expect(getByTestId('footer')).toBeTruthy();
    }); 
});

