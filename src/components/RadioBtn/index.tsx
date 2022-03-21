import React from 'react';
import { Label, Input, Indicator } from './RadioBtn.styled';

interface RadioBtnProps {
    value?: string
    checked?: boolean
    onChange?: React.EffectCallback
    name?: string
    id?: string
    label?: string
}

const RadioBtn = ({
    value,
    onChange,
    name,
    id,
    label,
    checked,
}: RadioBtnProps) => (
    <Label htmlFor={id}>
        {label}
        <Input
            id={id}
            type="radio"
            role="radio"
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
        />
        <Indicator />
    </Label>
);

export default RadioBtn;
