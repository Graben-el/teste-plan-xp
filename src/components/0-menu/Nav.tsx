import { Link } from 'react-scroll'
import { MenuLink } from "../modulos/MenuLink"
import { NavContainer } from "./styles"

export const Nav: React.FC = () => {
    return (
        <NavContainer>
            <Link to='quem-somos' containerId='container' activeClass="active" spy={true} smooth={true} >
                <MenuLink number="01" text="Quem Somos"/>
            </Link>
            <Link to='oque-fazemos' containerId='container' activeClass="active" spy={true} smooth={true} >
                <MenuLink number="02" text="O que fazemos"/>
            </Link>
            <Link to='plan-news' containerId='container' activeClass="active" spy={true} smooth={true} >
                <MenuLink number="03" text="Plan News"/>
            </Link>
            <Link to='clientes' containerId='container' activeClass="active" spy={true} smooth={true} >
                <MenuLink number="04" text="Nossos Clientes"/>
            </Link>
            <Link to='contato' containerId='container' activeClass="active" spy={true} smooth={true} >
                <MenuLink number="05" text="Contato"/>
            </Link>
            
        </NavContainer>
    )
}