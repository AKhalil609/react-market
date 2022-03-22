import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterCard from './components/FilterCard';
import Header from './components/Header';
import { ProductCard } from './components/ProductCard';
import SortingCard from './components/SortingCard';
import { AppContainer, CardsContainer, ContentContainer, SearchInput, Title } from './components/styles/Container.styled';
import { fetchItemRequest } from './Store/items/actions';
import { getPendingSelector, getItemsSelector, getErrorSelector } from './Store/items/selectors';
  

const App: FunctionComponent = () => {

    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const items = useSelector(getItemsSelector);
    const error = useSelector(getErrorSelector);
  
    useEffect(() => {
        dispatch(fetchItemRequest());
    }, []);

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
