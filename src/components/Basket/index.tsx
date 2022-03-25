import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemsSelector, getCartTotalSelector } from '../../Store/items/selectors';
import { AddItemPayload } from '../../Store/items/types';
import { BasketTotal, Container } from './Basket.styled';
import BasketItem from './BasketItem';

const Basket: React.FC = () =>{

    const items = useSelector(getCartItemsSelector);
    const total = Math.round(useSelector(getCartTotalSelector) * 100) / 100;
    return (
        <Container>
            {items.map((item: AddItemPayload, index: number) => <BasketItem item={item} key={index}></BasketItem>)}
            
            <BasketTotal>₺ {total}</BasketTotal>
        </Container>
    );
};

export default Basket;