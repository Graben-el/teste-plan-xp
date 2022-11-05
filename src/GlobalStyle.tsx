import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --bg-color: #1E1E1E;
        --subtitle-color: #939598;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--bg-color); 
        color: #fff;
        height: 100vh;
    }
    

    a, a:visited {
        color: black;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .arrow {
            bottom: -5%;
            right: -25%;
            color: #fff;
            transform: rotate(45deg);
            font-size: 1.8rem;
        }
`

export const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: hidden;
`