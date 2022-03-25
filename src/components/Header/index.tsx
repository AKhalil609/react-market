import React from 'react';
import { BasketBtn, HeaderContainer } from '../styles/Container.styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Basket } from '../../assets/basket.svg';
import { useDispatch, useSelector } from 'react-redux';
import { showBasket } from '../../Store/items/actions';
import { getBasketStatusSelector, getCartTotalSelector } from '../../Store/items/selectors';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const total = Math.round(useSelector(getCartTotalSelector) * 100) / 100;
    const _showBasket = useSelector(getBasketStatusSelector);
    const handleClick = () => {
        dispatch(showBasket());
    };

    return (
        <HeaderContainer>
            <Logo />{' '}
            <BasketBtn showBasket={_showBasket} onClick={handleClick}>
                <Basket /> ₺ {total}
            </BasketBtn>
        </HeaderContainer>
    );};

export default Header;
