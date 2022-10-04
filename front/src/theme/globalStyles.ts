import { createGlobalStyle } from 'styled-components';
import { THEME } from './colors';
import { device } from '../utils/media-query';

/**
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
*/

interface StyledProps {
    // img = path + image location.
    img: string;
}

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Poppins, Arial, sans-serif;
}
body {
    background-image: url(${(props: StyledProps) => props.img}); 
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.line-titles {
    background-color: ${THEME.BACKGROUND.ORANGE};
    height: .3rem;
    width: 10rem;

    @media ${device.mobileL} {
        width: 5rem;
    }
}
`;

export default GlobalStyles;