import React from 'react';
import { BasketBtn, HeaderContainer } from '../styles/Container.styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Basket } from '../../assets/basket.svg';

const Header: React.FC = () => (
    <HeaderContainer>
        <Logo />{' '}
        <BasketBtn>
            <Basket /> ₺ 14,99
        </BasketBtn>
    </HeaderContainer>
);

export default Header;
