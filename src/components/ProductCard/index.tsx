import React from 'react';
import { ImageContainer, Price, ProductLable, AddBtn, CardContainer } from '../styles/Container.styled';

export const ProductCard: React.FC = () => (
    <CardContainer>
        <ImageContainer src="https://via.placeholder.com/150" alt="Girl in a jacket" ></ImageContainer>
        <Price>₺ 14,99</Price>
        <ProductLable>Gorgeous Office Mug</ProductLable>
        <AddBtn>Add</AddBtn>
    </CardContainer>

);