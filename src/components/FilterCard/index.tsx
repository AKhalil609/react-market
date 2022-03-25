import React, { ReactEventHandler, useEffect, useState } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEntries, setFilteredEntries] = useState([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setFilteredEntries(
            entries.filter((entry: any) =>
                entry[0].toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, entries]);

    return (
        <MiniCardContainer>
            <Subtitle>{title}</Subtitle>
            <MiniCard>
                <SearchInput placeholder={`Search ${title}`} onChange={e=> setSearchTerm(e.target.value)}></SearchInput>
                <ListContainer>
                    {pending ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error</div>
                    ) : (
                        filteredEntries.map((entry: any, index: any) => (
                            <CheckBoxContainer key={index}>
                                <Checkbox name={title.toLowerCase()} value={entry[0]} label={entry[0]} /> ({entry[1]})
                            </CheckBoxContainer>
                        ))
                    )}
                </ListContainer>
            </MiniCard>
        </MiniCardContainer>
    );
};

export default FilterCard;
