import React from 'react';
import {
    ControlBtn,
    ControlsContainer,
    CounterContainer,
} from './Basket.styled';
import { ReactComponent as Add } from '../../assets/add.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { AddItemPayload } from '../../Store/items/types';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../Store/items/actions';

interface Props {
    item: AddItemPayload
}

const ItemControls: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const addItemToCart = () => {
        const payload = {
            id: item.id,
            quantity: 1,
            name: item.name,
            price: item.price,
        };
        dispatch(addItem(payload));
    };

    const removeItemFromCart = () => {
        const payload = {
            id: item.id,
            quantity: 1,
            name: item.name,
            price: item.price,
        };
        dispatch(removeItem(payload));
    };
    return (
        <ControlsContainer data-testid='ControlsContainer'>
            <ControlBtn onClick={removeItemFromCart}>
                <Minus />
            </ControlBtn>
            <CounterContainer data-testid='count'>{item.quantity}</CounterContainer>
            <ControlBtn role='AddBtn' onClick={addItemToCart}>
                <Add />
            </ControlBtn>
        </ControlsContainer>
    );
};

export default ItemControls;
