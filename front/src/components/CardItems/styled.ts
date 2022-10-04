import styled from "styled-components";
import { THEME } from "../../theme/colors";


export const BoxItems = styled.div`
background-color: ${THEME.BACKGROUND.TERTIARY};
color: ${THEME.TEXT.WHITE};
height: 10rem; 
width: 11rem;
padding: .5rem;
margin-left: .8rem;
box-shadow: 1px 1px 2px ${THEME.BACKGROUND.BLACK_RGB};
border-top-left-radius: 40%;
border-bottom-right-radius: 40%;
/* border-bottom: 1px solid ${THEME.BACKGROUND.ORANGE}; */

display: grid;
grid-template-rows: 1fr 1fr;

:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: .5px .5px 1px ${THEME.BACKGROUND.BLACK_RGB};
}
`;

export const CardHeaderItem = styled.div`
display: grid;
position: relative;
grid-template-columns: 1fr 1fr;
& div {
    margin-top: 1rem;
    /* color: ${THEME.TEXT.ORANGE}; */
    text-shadow: 1px 1px 1px ${THEME.BACKGROUND.BLACK_RGB};
}
`;

export const CardImageHead = styled.div`
position: absolute;
bottom: 0;
width: 90%;
height: 90%;
background-color: rgba(0,0,0,.1);
`;

export const ImgItem = styled.img`
width: 50%;
`;

export const CardBodyItem = styled.div`
text-align: center;
& p {
    font-size: .6rem;
    max-width: 100%;
    white-space: hidden;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 
}

& a {
    text-decoration: none;
    color: ${THEME.TEXT.ORANGE};
    font-size: .8rem;    
}
`;