import React from 'react';
import { useSelector } from 'react-redux';
import {
    getErrorSelector,
    getPendingSelector,
} from '../../Store/compaines/selectors';
import Checkbox from '../CheckBox';
import {
    MiniCardContainer,
    Subtitle,
    MiniCard,
    SearchInput,
    ListContainer,
    CheckBoxContainer,
} from '../styles/Container.styled';

interface Props {
    title: string;
    entries: any;
}


const FilterCard: React.FC<Props> = ({title, entries}) => {
    const pending = useSelector(getPendingSelector);
    const error = useSelector(getErrorSelector);
    return (
        <MiniCardContainer>
            <Subtitle>{title}</Subtitle>
            <MiniCard>
                <SearchInput placeholder={`Search ${title}`}></SearchInput>
                <ListContainer>
                    {pending ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error</div>
                    ) : (
                        entries.map((entry: any, index: any) => (
                            <CheckBoxContainer key={index}>
                                <Checkbox label={entry[0]} /> ({entry[1]})
                            </CheckBoxContainer>
                        ))
                    )}
                </ListContainer>
            </MiniCard>
        </MiniCardContainer>
    );
};

export default FilterCard;
