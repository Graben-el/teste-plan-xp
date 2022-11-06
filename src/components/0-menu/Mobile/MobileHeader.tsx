import styled from "styled-components"
import logo from '../../../images/logo.png'
import { MenuHamburguer } from "./Menu"

export const MobileHeader: React.FC = () => {
    return(
        <Wrapper>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>
            <MenuHamburguer />
            
        </Wrapper>
    )
}

export const Wrapper = styled.header`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background-color: var(--bg-color);
    position: fixed;
    z-index: 1;
    border-bottom: 1px solid var(--subtitle-color);
    
    @media (min-width: 1024px) {
        display: none;
    }

    img {
        width: 140px;
        transition: 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    .hamburguer {
        width: 100px;
        height: 100px;
        
    }


`