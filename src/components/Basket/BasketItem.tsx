import React from 'react';
import { AddItemPayload } from '../../Store/items/types';
import { ItemContainer, ItemInfoContainer, ItemLable, ItemPrice } from './Basket.styled';
import ItemControls from './ItemControls';

interface Props {
    item: AddItemPayload
}

const BasketItem: React.FC<Props> = ({item}) => (
    <ItemContainer>
        <ItemInfoContainer>
            <ItemLable>{item.name}</ItemLable>
            <ItemPrice>{ item.quantity * Math.round(item.price * 100) / 100}</ItemPrice>
        </ItemInfoContainer>
        <ItemControls item={item}/>
    </ItemContainer>
);

export default BasketItem;