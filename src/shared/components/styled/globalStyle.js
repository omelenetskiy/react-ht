import { createGlobalStyle } from "styled-components";
import bg from "../../../../static/images/collage.jpg";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    min-width: ${props => props.theme.minPageWidth};
    line-height: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${props => props.theme.dangerColor};
    text-decoration: none;
  
    &:active,
    &:link,
    &:visited {
      color: ${props => props.theme.dangerColor};
    }
  }
`;
