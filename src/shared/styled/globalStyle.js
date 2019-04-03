import { createGlobalStyle } from 'styled-components';
import bg from '../../../static/images/collage.jpg';

export default createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    min-width: ${(props) => props.theme.minPageWidth};
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
    max-width: ${(props) => props.theme.maxPageWidth};
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${(props) => props.theme.dangerColor};
    text-decoration: none;
  }
`;
