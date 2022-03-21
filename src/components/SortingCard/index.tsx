import React from 'react';
import RadioBtn from '../RadioBtn';
import { MiniCard, MiniCardContainer, Subtitle } from '../styles/Container.styled';

const SortingCard = () => (
    <MiniCardContainer>
        <Subtitle>Sorting</Subtitle>
        <MiniCard>
            <RadioBtn label="Price low to high" name="sort"/>
            <RadioBtn label="Price high to low" name="sort"/>
            <RadioBtn label="New to old" name="sort"/>
            <RadioBtn label="Old to new" name="sort"/>
        </MiniCard>
    </MiniCardContainer>
);

export default SortingCard;