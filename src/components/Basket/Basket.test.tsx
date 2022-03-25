import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import Basket from '.';
import ItemControls from './ItemControls';
import reducer from '../../Store/items/reducer';
import {mount} from 'enzyme';

afterEach(cleanup);

const startingState = {
    item: {
        pending: false,
        items: [],
        cart: [],
        total: 0,
        error: null,
        brandFilter: [],
        tagFilter: [],
        showBasket: false
    },
    company: {
        pending: false,
        companies: [],
        error: null,
    }

};

const item = {
    id: 'abbe3d81-6c0f-4de1-833d-424af64add87',
    name: 'Awesome Night Mug',
    price: 13.99,
    quantity: 1,
};

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(reducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    };
};


describe('Basket Component', () => {
    it('renders with redux', () => {
        const { getByTestId } = renderWithRedux(<Basket />, {
            initialState: {
                item: {
                    cart: [item],
                },
            },
        });
        expect(getByTestId('BasketContainer')).toBeTruthy();
    });
    it('should not render when no Items in Basket', () => {
        const { queryByTestId } = renderWithRedux(<Basket />, {initialState: startingState});
        expect(queryByTestId('BasketContainer')).toBeFalsy();
    });
});

describe('ItemControls Component', () => {
    it('renders with redux', () => {
        const wrapper = renderWithRedux(<Basket />, {
            initialState: {
                item: {
                    cart: [item],
                },
            },
        });
        expect(wrapper.getByTestId('BasketContainer')).toBeTruthy();
    });
    it('should render item', () => {
        const wrapper = renderWithRedux(<ItemControls item={item}/>, {
            initialState: {
                item: {
                    cart: [item],
                },
            },
        });
        expect(wrapper.queryByTestId('ControlsContainer')).toBeTruthy();
    });
    // it('should add quantity to item', () => {
    //     const wrapper = renderWithRedux(<ItemControls item={item}/>, {
    //         initialState: {
    //             cart: [item],
    //         },
    //     });

    //     fireEvent.click(wrapper.getByRole('AddBtn'));
        
    //     // console.log(wrapper.state());
        
    //     expect(wrapper.getByTestId('count')).toHaveTextContent('2');
    // });
});


