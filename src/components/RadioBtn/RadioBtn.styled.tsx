import styled, { keyframes } from 'styled-components';
import { RegularNormal, ColorPalette } from '../styles/Mixins';
import Tic from '../../assets/tic.svg';

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.6em 1em;
  ${RegularNormal()};
  color: ${ColorPalette.CoralBlack};
`;

export const Indicator = styled.div`
  border: 1px solid ${ColorPalette.LightBlue};
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -30px;

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    background-image: url(${Tic});
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;