import reducer from '../Store/items/reducer';
import { ItemActions, ItemState } from '../Store/items/types';

let initialState: ItemState ;

describe('reducers', () => {
    describe('Items actions', () => {
        beforeEach(()=>{
            initialState = {
                pending: false,
                items: [],
                cart: [],
                total: 0,
                error: null,
                brandFilter: [],
                tagFilter: [],
                showBasket: false,
            };
        });

        const item = {
            _id: 'demo-item-id',
            tags: ['cat'],
            price: 10,
            name: 'test',
            description: 'test dec',
            slug: 'slug test',
            added: 601111,
            manufacturer: 'manfc demo',
            itemType: 'mug',
        };

        const cartItem = {
            id: 'demo-cartItem-id',
            quantity: 1,
            name: 'testing',
            price: 15,
            total: 15,
        };

        it('should handle FETCH_ITEM_FAILURE action', () => {
            expect(
                reducer(
                    { ...initialState },
                    { type: 'FETCH_ITEM_FAILURE', payload: { error: 'error' } }
                )
            ).toEqual({ ...initialState, error: 'error' });
        });

        it('should handle FETCH_ITEM_SUCCESS action', () => {
            const reduce = reducer(
                { ...initialState },
                { type: 'FETCH_ITEM_SUCCESS', payload: { items: [{
                    ...item, 
                }] } }
            );
            expect(reduce).toEqual({ ...initialState, items: [{...item}] });
        });

        it('should handle FETCH_ITEM_REQUEST action', () => {
            const reduce = reducer(
                { ...initialState },
                { type: 'FETCH_ITEM_REQUEST'}
            );
            expect(reduce).toEqual({ ...initialState, pending: true });
        });

        it('should handle ADD_TO_CART action', () => {
            const reduce = reducer(
                { ...initialState },
                { type: 'ADD_TO_CART', payload: {
                    ...cartItem
                }}
            );
            expect(reduce).toEqual({ ...initialState, cart:[cartItem], total: 15 });
        });
        it('should handle ADD_TO_CART with same item in cart action', () => {
            const reduce = reducer(
                { ...initialState, cart:[cartItem], total: 15 },
                { type: 'ADD_TO_CART', payload: {
                    ...cartItem
                }}
            );
            expect(reduce).toEqual({ ...initialState, cart:[{...cartItem, quantity: 2}], total: 30 });
        });
    });

});
