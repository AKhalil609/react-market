import React from 'react';
import { useDispatch } from 'react-redux';
import { sortItems } from '../../Store/items/actions';
import RadioBtn from '../RadioBtn';
import { MiniCard, MiniCardContainer, Subtitle } from '../styles/Container.styled';

const SortingCard = () => {
    const dispatch = useDispatch();
    const sort = (key: string, ascending:boolean) =>{
        const payload = {
            key,
            ascending
        };
        dispatch(sortItems(payload));
    };

    
    return (
        <MiniCardContainer>
            <Subtitle>Sorting</Subtitle>
            <MiniCard>
                <RadioBtn onClick={()=>sort('price', true)} label="Price low to high" name="sort"/>
                <RadioBtn onClick={()=>sort('price', false)} label="Price high to low" name="sort"/>
                <RadioBtn onClick={()=>sort('added', false)} label="New to old" name="sort"/>
                <RadioBtn onClick={()=>sort('added', true)} label="Old to new" name="sort"/>
            </MiniCard>
        </MiniCardContainer>
    );};

export default SortingCard;