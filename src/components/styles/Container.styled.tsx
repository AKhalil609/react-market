import styled from 'styled-components';
import {
    BreakPoints,
    ColorPalette,
    HeadLine4,
    RegularBold,
    RegularNormal,
    RegularSemiBold,
    SmallSemiBold,
} from './Mixins';

export const HeaderContainer = styled.header`
    width: 100%;
    background: ${ColorPalette.LightBlue};
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddBtn = styled.button`
    border: 0;
    box-shadow: none;
    background: ${ColorPalette.LightBlue};
    border-radius: 2px;
    height: 22px;
    color: ${ColorPalette.PureWhite};
    margin-top: 8px;
    :hover {
        cursor: pointer;
    }
`;

export const ProductLable = styled.span`
    ${RegularSemiBold('20px')};
    color: ${ColorPalette.NearlyBlack};
`;

export const Price = styled.span`
    ${RegularBold('20px')};
    color: ${ColorPalette.LightBlue};
`;

export const ImageContainer = styled.img`
    display: flex;
    background: #fefefe;
    border: 1.17666px solid #f3f0fe;
    border-radius: 12px;
    padding: 16px;
    width: 92px;
    height: 92px;
    margin-bottom: 8px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 124px;
    justify-content: space-between;
`;

export const Title = styled.div`
    ${HeadLine4};
    color: ${ColorPalette.JustGray};
    letter-spacing: 0.25px;
    margin-bottom: 16px;
`;

export const CardsContainer = styled.div`
    background: ${ColorPalette.PureWhite};
    padding: 21px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 608px;
    min-width: 273px;
    justify-content: space-between;
`;

interface Props {
    showBasket?: boolean
}

export const BasketBtn = styled.button<Props>`
    width: 129px;
    height: 76px;
    background: ${(props)=> props.showBasket ? '#147594' : ColorPalette.LightBlue};
    color: ${ColorPalette.PureWhite};
    position: absolute;
    border: 0;
    right: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${RegularSemiBold('18px')}
    letter-spacing: 0.16px;
    top: 0;
    :hover {
        cursor: pointer;
    }
`;

export const SearchInput = styled.input`
    height: 48px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 16px 12px;
`;

export const Subtitle = styled.label`
    ${SmallSemiBold('18px')};
    color: ${ColorPalette.MountainGray};
    margin-bottom: 12px;
`;

export const MiniCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

`;

export const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
    background: ${ColorPalette.PureWhite};
    max-height: 274px;
    max-width: 296px;
    min-width: 273px;
    padding: 24px;
    box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
    border-radius: 2px;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: 17px;
`;

export const ContentContainer = styled.div`

        margin-right: 16px;
`;

export const AppContainer = styled.div`
    display: flex;
    padding: 40px 104px;

    @media (max-width: ${BreakPoints.small}) {
        flex-direction: column;
        align-items: center;
}   

`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    ${RegularNormal('174%')};
    color: ${ColorPalette.LightBlue};
    margin-bottom: 40px;
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${RegularNormal('18px')};
    color: ${ColorPalette.LableGray};
`;
