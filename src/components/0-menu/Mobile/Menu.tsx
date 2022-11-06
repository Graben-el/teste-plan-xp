import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { MenuLinkMobile } from './MenuLinkMobile'

export const MenuHamburguer: React.FC = () => {
    const [menuState, setState] = useState({
        menuOpen: false
    })

    const handleStateChange = (state: any) => {
        setState({
            menuOpen: state.isOpen
        })
    }

    const closeMenu = () => {
        setState({
            menuOpen: false
        })
    }

    return (
        <NavContainer>
            <Menu className='hamburguer'
                left
                isOpen={menuState.menuOpen}
                onStateChange={(state: any) => handleStateChange(state)}>
                <ul>
                    < Link to='quem-somos' containerId='container' activeClass="active" spy={true} smooth={true} onClick={() => closeMenu()}>
                        <li><MenuLinkMobile number="01" text="Quem Somos" /></li>
                    </ Link>
                    <Link to='oque-fazemos' containerId='container' activeClass="active" spy={true} smooth={true} onClick={() => closeMenu()}>
                        <li><MenuLinkMobile number="02" text="O que fazemos"/></li>
                    </Link>
                    <Link to='plan-news' containerId='container' activeClass="active" spy={true} smooth={true} onClick={() => closeMenu()}>
                        <li><MenuLinkMobile number="03" text="Plan News" /></li>
                    </Link>
                    <Link to='clientes' containerId='container' activeClass="active" spy={true} smooth={true} onClick={() => closeMenu()}>
                        <li><MenuLinkMobile number="04" text="Nossos Clientes" /></li>
                    </Link>
                    <Link to='contato' containerId='container' activeClass="active" spy={true} smooth={true} onClick={() => closeMenu()}>
                        <li><MenuLinkMobile number="05" text="Contato" /></li>
                    </Link>
                </ul>
            </Menu >
        </NavContainer>
    )
}

export const NavContainer = styled.nav`
  
    li:hover {
        cursor: pointer;
    }
   
    #react-burger-menu-btn {
        width: 70px  ;  

        
    }

    .bm-burger-button {
        width: 45px !important; 
        height: 30px !important; 
        display: none !important; 
        position: relative !important; 
        
        
        @media (max-width: 1024px) {
            display: block !important; 
        }
    }
    
    .bm-burger-bars {
        border-radius: 10px !important; 
        background: #000; 
        width: 100% !important;
        position: absolute !important; 
        transition: 0.3s ease-in-out;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: var(--subtitle-color); 
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px; 
        width: 24px; 
        margin-top: 112px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: var(--subtitle-color); 
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: absolute ; 
        right: 0% !important; 
        top: 0 !important;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #525252; 
        padding: 2.5em 1.5em 0; 
        font-size: 1.5em; 
        margin-top: 112px;
        
        overflow-y: hidden !important;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47; 
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad !important; 
        display: flex !important; 
        justify-content: space-around !important; 
        align-items: center !important; 
        flex-direction: column;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
    }

    /* Individual item */
    .bm-item {
        display: flex !important; 
        flex-direction: column; 
        gap: 50px !important; 
        justify-content: center;
        align-items: center; 
        height: 100%; 
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0); 
        height: 0;
        width: 0;
        overflow-x: hidden; 
        display: none;
    }
`