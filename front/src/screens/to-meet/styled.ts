import styled from 'styled-components';
import { THEME } from '../../theme/colors';
import { device } from '../../utils/media-query';

export const Container = styled.div`
background: ${THEME.BACKGROUND.SECONDARY_RGB};
margin: 0 auto;
height: 100vh;
width: 90%;

@media ${device.mobileL} {
    width: 100%;
}
`;

export const SecTitle = styled.section`
padding-left: 1rem;

& h1 {    
    font-size: 3rem;
    letter-spacing: .3rem;
    color: ${THEME.TEXT.WHITE};

    @media ${device.mobileL} {
        font-size: 1.5rem;
        letter-spacing: normal;
    }
}
`;

export const SecItems = styled.div`
margin-top: 1.5rem;
padding-left: 1rem;
overflow-y: hidden;
overflow-x: scroll;
display: flexbox;
padding-bottom: 1rem;

::-webkit-scrollbar {
    background-color: none;
    height: .4rem;
}
::-webkit-scrollbar-button {
    background-color: none;
}
::-webkit-scrollbar-thumb {
    background-color: ${THEME.BACKGROUND.BLACK_RGB};
    border-radius: 1rem;
}

padding-right: 1rem;

`;
export const ContentDialogDetails = styled.div`
position: relative;
height: 100%;
`;

export const DialogHeader = styled.div`
display: flexbox;
justify-content: space-between;
padding: 0 1rem 1rem 1rem;
`;

export const ImgDialog = styled.img`
width: 4rem;
`;

export const DialogDetails = styled.div`
background-color: ${THEME.BACKGROUND.SECONDARY_RGB};
border-radius: 1rem;
padding: 1rem;
overflow-y: scroll;
width: 100%;
height: 70%;
margin-bottom: 1rem;

::-webkit-scrollbar {
    background-color: none;
    height: .4rem;
    width: .4rem;
}

::-webkit-scrollbar-button {
    background-color: none;
}

::-webkit-scrollbar-thumb {
    background-color: ${THEME.BACKGROUND.BLACK};
    border-radius: 1rem;
}

display: flex;
justify-content: center;

& p {
    color: ${THEME.BACKGROUND.WHITE};
    font-size: .8rem;
    text-align: justify;
}
`;

export const FooterDialogDetails = styled.footer`
justify-content: end;
display: flex;
& button {
    color: ${THEME.TEXT.ORANGE};
    background-color: ${THEME.BACKGROUND.TERTIARY};   
    cursor: pointer;
    padding: .5rem;
    border-radius: 1rem;
    border: none;
}
& button:focus {
    outline: none;
    border: none;
}
`;