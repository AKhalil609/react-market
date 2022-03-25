import React from 'react';
import { Label, Input, Indicator, LabelContainer } from './CheckBox.styled';

interface CheckBoxProps {
    value?: string,
    checked?: boolean,
    onChange?: React.EffectCallback,
    name?: string,
    id?: string,
    label?: string,
}


const Checkbox = ({
    value,
    checked,
    onChange,
    name,
    id,
    label,
}: CheckBoxProps) => {
    return (
        <Label htmlFor={id}>
            <LabelContainer>{label}</LabelContainer>
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <Indicator />
        </Label>
    );
};

export default Checkbox;