import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addBrandFilter,
    addTagFilter,
    removeBrandFilter,
    removeTagFilter,
} from '../../Store/items/actions';
import {
    getBrandFiltersSelector,
    getBrandTagsSelector,
} from '../../Store/items/selectors';
import { Label, Input, Indicator, LabelContainer } from './CheckBox.styled';

interface CheckBoxProps {
    value?: string
    checked?: boolean
    onChange?: React.EffectCallback
    name?: string
    id?: string
    label?: string
}

const Checkbox = ({ value, name, id, label }: CheckBoxProps) => {
    const [check, setCheckbox] = useState(false);
    const dispatch = useDispatch();
    const brands = useSelector(getBrandFiltersSelector);
    const tags = useSelector(getBrandTagsSelector);

    const handelCheckbox = () => {
        setCheckbox(!check);
        const payload = {
            filterElement: value || '',
            filterType: name || '',
        };
        if (name === 'brands' && !check) {
            dispatch(addBrandFilter(payload));
        }
        if (name === 'brands' && check) {
            dispatch(removeBrandFilter(payload));
        }
        if (name === 'tags' && !check) {
            dispatch(addTagFilter(payload));
        }
        if (name === 'tags' && check) {
            dispatch(removeTagFilter(payload));
        }
    };

    useEffect(() => {
        if (name === 'brands' && !brands.length) {
            setCheckbox(false);
        }
        if (name === 'tags' && !tags.length) {
            setCheckbox(false);
        }
        if (name === 'brands' && !brands.length && label === 'All') {
            setCheckbox(true);
        } else if (name === 'brands' && brands.length && label === 'All') {
            setCheckbox(false);
        }
        if (name === 'tags' && !tags.length && label === 'All') {
            setCheckbox(true);
        } else if (name === 'tags' && tags.length && label === 'All') {
            setCheckbox(false);
        }
    }, [brands, tags]);

    return (
        <Label htmlFor={id}>
            <LabelContainer>{label}</LabelContainer>
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                checked={check}
                onChange={handelCheckbox}
            />
            <Indicator checked={check} />
        </Label>
    );
};

export default Checkbox;
