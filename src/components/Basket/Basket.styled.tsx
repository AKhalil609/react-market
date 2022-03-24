import styled from 'styled-components';
import { ColorPalette, RegularNormal, RegularSemiBold } from '../styles/Mixins';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${ColorPalette.PureWhite};
    border: 8px solid ${ColorPalette.LightBlue};
    border-radius: 2px;
    padding: 25px 20px;
`;

export const ItemContainer = styled.div`
    display: flex;
    width: 231px;
    justify-content: space-between;
    height: fit-content;
    padding-bottom: 18px;
    border-bottom: 1px solid ${ColorPalette.LightGray};
`;

export const ItemLable = styled.div`
    ${RegularNormal('18px')};
    color: ${ColorPalette.NearlyBlack};
    margin-bottom: 4px;
`;

export const ItemPrice = styled.span`
    ${RegularSemiBold('18px')};
    color: ${ColorPalette.LightBlue};
`;

export const ItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 74px;
    height: fit-content;
`;

export const ControlBtn = styled.button`
    color: ${ColorPalette.LightBlue};
    display: contents;
    :hover{
        cursor: pointer;
    }
`;

export const CounterContainer = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorPalette.LightBlue};
    color: ${ColorPalette.PureWhite};
    ${RegularSemiBold('20px')}
`;

export const BasketTotal = styled.div`
    border: 2px solid #1EA4CE;
    border-radius: 2px;
    height: fit-content;
    width: fit-content;
    padding: 17px 24px;
    ${RegularSemiBold('16px')}
    margin-top: 16px;
    align-self: flex-end;
    color: ${ColorPalette.LightBlue}
`;
