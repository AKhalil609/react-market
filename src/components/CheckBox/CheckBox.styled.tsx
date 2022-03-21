import styled, { keyframes } from 'styled-components';
import { ColorPalette, RegularNormal } from '../styles/Mixins';

interface Props {
    checked?: boolean;
}

export const Input = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
`;

export const Label = styled.label`
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 0.6em 1em;
    ${RegularNormal()};
    color: ${ColorPalette.CoralBlack};
`;

export const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div<Props>`
    width: 22px;
    height: 22px;
    background: ${props => (props.checked ? ColorPalette.LightBlue : ColorPalette.PureWhite)};
    position: absolute;
    top: 0em;
    left: -1.6em;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;

    ${Input}:not(:disabled):checked & {
        background: #d1d1d1;
    }

    ${Label}:hover & {
        border: 1px solid ${ColorPalette.MountainGray};
    }

    &::after {
        content: '';
        position: absolute;
        display: none;
    }

    ${Input}:checked + &::after {
        display: block;
        top: 0.1em;
        left: 0.35em;
        width: 35%;
        height: 70%;
        border: solid ${ColorPalette.PureWhite};
        border-width: 0 0.2em 0.2em 0;
        animation-name: ${rotate};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }

    &::disabled {
        cursor: not-allowed;
    }
`;
