import React from 'react';
import { IItem } from '../../Store/items/types';
import { ImageContainer, Price, ProductLable, AddBtn, CardContainer } from '../styles/Container.styled';

interface Props {
    item: IItem
}


export const ProductCard: React.FC<Props> = ({item}) => {

    return (
        <CardContainer>
            <ImageContainer src="https://via.placeholder.com/150" alt="Girl in a jacket" ></ImageContainer>
            <Price>{item.price}</Price>
            <ProductLable>{item.name}</ProductLable>
            <AddBtn>Add</AddBtn>
        </CardContainer>

    );};