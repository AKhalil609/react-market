import styled, { keyframes } from 'styled-components';
import { ColorPalette, RegularNormal } from '../styles/Mixins';

export const Container = styled.div`
    display: flex;
    width: 296px;
    height: 339px;
    background: ${ColorPalette.PureWhite};
    border: 8px solid ${ColorPalette.LightBlue};
    border-radius: 2px
`;