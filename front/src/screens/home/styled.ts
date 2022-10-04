import styled from 'styled-components';
import { THEME } from '../../theme/colors';
import { device } from '../../utils/media-query';


interface PropsCSS {
    // Entre com um template name para Grid. 
    frameColum: string;
}


export const Container = styled.div`
position: relative;
`;

export const Content = styled.div`
background-color: ${THEME.BACKGROUND.DEFAULT};
position: absolute;
top: 2.4rem;
height: 28rem;
width: 65%;

border-top-right-radius: 2.5rem;
border-bottom-right-radius: 2.5rem;

border-bottom: 1px solid ${THEME.BACKGROUND.ORANGE};
border-top: .5px solid ${THEME.BACKGROUND.WHITE};

box-shadow: 1px 1px 3px ${THEME.BACKGROUND.BLACK_RGB};

display: grid;
grid-template-columns: 2fr 1fr;
grid-template-areas: "INFO PROFILE";

@media ${device.mobileL} {
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "PROFILE" "INFO";
    width: 100%;
    height: 32rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
`;

export const RowBox = styled.div`
grid-area: ${({ frameColum }: PropsCSS) => frameColum};
padding: 1.5rem;
position: relative;
@media ${device.mobileL} {    
    width: 100vw;
    text-align: center;
}

@media ${device.tablet} {    
    width: 100vw;
    text-align: center;
}
`;

export const ColumBox = styled.div`
padding-left: .5rem;
`;

export const NameProfile = styled.h1`
color: ${THEME.TEXT.WHITE};
font-size: 2.2rem;
letter-spacing: .1rem;

@media ${device.mobileL} {
    font-size: 1.3rem;
    margin-top: -1.7rem;
}
`;

export const ProfessionTitle = styled.div`
color: ${THEME.TEXT.ORANGE};
letter-spacing: .5rem;
text-transform: uppercase;
font-size: 1.2rem;

@media ${device.mobileL} {
    letter-spacing: .3rem;
}
`;

export const Description = styled.div`
background-color: ${THEME.BACKGROUND.TERTIARY};
color: ${THEME.TEXT.WHITE};
box-shadow: 1px 1px 2px ${THEME.BACKGROUND.BLACK_RGB};
position: absolute;
left: 0;
bottom: 8rem;

height: 12rem;
width: 92%;

padding: 1rem;
text-align: justify;
text-justify: inter-cluster;

@media ${device.mobileL} {
    bottom: -6rem;
    width: 100%;
    height: 15rem;
}
`;

export const LinkToMeet = styled.a`
color: ${THEME.TEXT.ORANGE};
position: absolute;
bottom: -1.5rem;
right: 0;
text-decoration: none;
@media ${device.mobileL} {
    bottom: 1rem;
    right: 1rem;
}
`;

export const ProfileImage = styled.img`
width: 13rem;
border-radius: 50%;
border: 2px solid ${THEME.BACKGROUND.TERTIARY};
box-shadow: 1px 1px 2px ${THEME.BACKGROUND.BLACK_RGB};

@media ${device.mobileL} {
    width: 13rem;
    margin-top: -3.2rem;
}
`;

export const ProfileIcons = styled.div`
color: ${THEME.TEXT.WHITE};
text-align: center;
margin-top: 1rem;
`;

export const IconsLink = styled.a`
color: ${THEME.TEXT.WHITE};

:nth-child(1n) {
    margin-left: 1.1rem;
}
`;

