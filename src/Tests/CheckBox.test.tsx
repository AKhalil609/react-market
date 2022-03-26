import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen, cleanup, waitFor, queryByTestId, queryByRole, findByRole } from '@testing-library/react';
import reducer from '../Store/items/reducer';
import Checkbox from '../components/CheckBox';

afterEach(cleanup);

// const startingState = {
//     item: {
//         pending: false,
//         items: [],
//         cart: [],
//         total: 0,
//         error: null,
//         brandFilter: [],
//         tagFilter: [],
//         showBasket: false
//     },
//     company: {
//         pending: false,
//         companies: [],
//         error: null,
//     }

// };

const item = {
    id: 'abbe3d81-6c0f-4de1-833d-424af64add87',
    name: 'Awesome Night Mug',
    price: 13.99,
    quantity: 1,
};

const checkBoxProps = {
    value: 'string',
    name: 'brands',
    label: 'string',
};

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(reducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    };
};

describe('CheckBox Component', () => { 
    it('renders with redux', () => {
        const { getByTestId } = renderWithRedux(<Checkbox value={checkBoxProps.value} />, {
            initialState: {
                item: {
                    items:[item]
                },
            },
        });
        expect(getByTestId('indicator')).toBeTruthy();
    });
});