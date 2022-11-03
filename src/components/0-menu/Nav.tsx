import { MenuLink } from "../modulos/MenuLink"
import { NavContainer } from "./styles"

export const Nav: React.FC = () => {
    return (
        <NavContainer>
            <a href="#">
                <MenuLink number="01" text="Quem Somos"/>
            </a>
            <a href="#">
                <MenuLink number="02" text="O que fazemos"/>
            </a>
            <a href="#">
                <MenuLink number="03" text="Plan News"/>
            </a>
            <a href="#">
                <MenuLink number="04" text="Nossos Clientes"/>
            </a>
            <a href="#">
                <MenuLink number="05" text="Contato"/>
            </a>
            
        </NavContainer>
    )
}