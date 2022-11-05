import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    border-right: 2px solid #292929;

    .menu-bg {
        color: #4444444b;
        position: relative;
        width: auto;
        font-size: 5.65rem;
        font-weight: 700;
    }

    .menu-text {
        color: #ececec;
        font-size: 1.5rem;
        font-weight: 500;
        position: absolute;
        left: 0;
        bottom: 50%;
        transform: translateY(54%);
    }
`

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    a {
        transition: 0.2s ease-in-out;
        display: block;
        color: #fff;
        width: 100%;
        text-transform: uppercase;
        margin: 0.5rem 0;
        padding: 0 0 0 50px;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }
`

export const FormTwo = styled.div`
    border-top: 2px solid #292929;
    height: 96.5px;
    width: 100%;
    padding: 12px 0;  


    .container {
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: 0.2s ease-in-out;

        &:hover {
         opacity: 0.7;
        }
        
        .text-card {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 44px;
        }

        .arrow {
            position: absolute;
            bottom: -5%;
            right: -25%;
            color: #fff;
            transform: rotate(45deg);
            font-size: 2.5rem;
        }
    }
    
    .ft-text {
        color: #a8a8a8d7;
        font-weight: 400;
        font-size: 2rem;
        width: 180px;
    }
`

export const LogoContainer = styled.header`
    padding: 48px 0 0 0;
    
    img {
        width: 140px;
        transition: 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`
