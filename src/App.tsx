import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from './components/Basket';
import FilterCard from './components/FilterCard';
import Header from './components/Header';
import { ProductCard } from './components/ProductCard';
import SortingCard from './components/SortingCard';
import { AppContainer, CardsContainer, ContentContainer, Footer, Title } from './components/styles/Container.styled';
import { fetchCompanyRequest } from './Store/compaines/actions';
import { fetchItemRequest } from './Store/items/actions';
import { getPendingSelector, getItemsSelector, getErrorSelector, getTagsSelector, getBrandsSelector} from './Store/items/selectors';
import { IItem } from './Store/items/types';
  

const App: React.FC = () => {

    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const items = useSelector(getItemsSelector);
    const error = useSelector(getErrorSelector);

    const tags = Object.entries(useSelector(getTagsSelector));
    const brands = Object.entries(useSelector(getBrandsSelector));

    
    useEffect(() => {
        dispatch(fetchItemRequest());
        dispatch(fetchCompanyRequest());
    }, []);

    return (
        <>
            <Header />
            <AppContainer>
                <ContentContainer>
                    <SortingCard />
                    <FilterCard title='Brands' entries={brands}/>
                    <FilterCard title='Tags' entries={tags}/>
                </ContentContainer>
                <ContentContainer>
                    <Title>Products</Title>
                    <CardsContainer>
                        {pending ? (<div>Loading...</div>) : error ? (
                            <div>Error</div>
                        ):(
                            items.map(((item: IItem) => <ProductCard item={item} key={item._id} />))
                        )}
                        
                    </CardsContainer>
                </ContentContainer>
                <ContentContainer>
                    <Basket />
                </ContentContainer>

            </AppContainer>
            <Footer>©2019 Market . Privacy Policy</Footer>
        </>
    
    );};

export default App;

