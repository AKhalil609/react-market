import { css } from 'styled-components';

export const RegularSemiBold = (lineHeight?: string) => css`
    font-weight: 600;
    font-size: 14px;
    line-height: ${lineHeight};
`;

export const RegularBold = (lineHeight?: string) => css`
    font-weight: 700;
    font-size: 14px;
    line-height: ${lineHeight};
`;

export const RegularNormal = (lineHeight?: string) => css`
    font-weight: 400;
    font-size: 14px;
    line-height: ${lineHeight};
`;

export const SmallSemiBold = (lineHeight?: string) => css`
    font-weight: 600;
    font-size: 13px;
    line-height: ${lineHeight};
`;

export const HeadLine4 = css`
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
`;

export const ColorPalette = {
    PureWhite: '#FFFFFF',
    JustGray: '#6F6F6F',
    MountainGray: '#697488',
    LightBlue: '#1EA4CE',
    NearlyBlack: '#191919',
    CoralBlack: '#525252'
};
