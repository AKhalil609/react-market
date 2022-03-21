import React from 'react';
import Checkbox from '../CheckBox';
import { MiniCardContainer, Subtitle, MiniCard, SearchInput, ListContainer } from '../styles/Container.styled';

const FilterCard = () => (
    <MiniCardContainer>
        <Subtitle>Brands</Subtitle>
        <MiniCard>
            <SearchInput placeholder='Search brand'></SearchInput>
            <ListContainer>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
                <Checkbox label="value"/>
            </ListContainer>
        </MiniCard>
    </MiniCardContainer>
);

export default FilterCard;