import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store/items/actions';
import { IItem } from '../../Store/items/types';
import { ImageContainer, Price, ProductLable, AddBtn, CardContainer } from '../styles/Container.styled';

interface Props {
    item: IItem
}


export const ProductCard: React.FC<Props> = ({item}) => {
    const dispatch = useDispatch();
    const addItemToCart = () =>{
        const payload = {
            id:item._id,
            quantity:1,
            name:item.name,
            price:item.price,
        };
        dispatch(addItem(payload));
    };



    return (
        <CardContainer>
            <ImageContainer src="https://via.placeholder.com/150" alt="Girl in a jacket" ></ImageContainer>
            <Price>₺ {item.price}</Price>
            <ProductLable>{item.name}</ProductLable>
            <AddBtn onClick={addItemToCart}>Add</AddBtn>
        </CardContainer>

    );};