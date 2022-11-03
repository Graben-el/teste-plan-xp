import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --bg-color: #1E1E1E;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Montserrat', sans-serif;
        

    }

    html {
        font-size: 62.5%;
        overflow: hidden;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        height: 100%;
        width: 2560px;
        max-width: 2560px;
        background-color: var(--bg-color);
        font-size: 1.6rem;
        color: #fff;
    }

    a, a:visited {
        color: black;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

export const AppContainer = styled.main`
    height: 100vh;
    width: 2560px;
    max-width: 2560px;
    display: flex;
    /* border: 1px solid green; */
`