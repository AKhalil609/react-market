import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from './components/CheckBox';
import FilterCard from './components/FilterCard';
import Header from './components/Header';
import { ProductCard } from './components/ProductCard';
import RadioBtn from './components/RadioBtn';
import SortingCard from './components/SortingCard';
import { AppContainer, CardsContainer, ContentContainer, SearchInput, Title } from './components/styles/Container.styled';
import { getItems } from './state/actions/MarketActions';
import { RootStore } from './state/Store';

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
  
    const items = useSelector((state: RootStore) => state.items);
    console.log(items);
    return (
        <>
            <Header>Hello</Header>
            <AppContainer>
                <ContentContainer>
                    <SortingCard />
                    <FilterCard />
                    <FilterCard />
                </ContentContainer>
                <ContentContainer>
                    <Title>Products</Title>
                    <CardsContainer>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </CardsContainer>
                </ContentContainer>

            </AppContainer>
        </>
    
    );};

export default App;
