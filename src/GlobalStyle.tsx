import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #1E1E1E;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: var(--bg-color);
    }

    a, a:visited {
        color: black;
    }
`

export const AppContainer = styled.main`
    height: 99.5vh;
    width: 1920px;
    max-width: 1920px;
    border: 2px solid green;
`