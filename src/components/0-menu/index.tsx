import React from 'react'
import { Header, Logo } from './styles';
import logo from '../../images/logo.png'

export const Menu: React.FC  = ()=> {
    return (
        <Header >
            <a href='/'>
                <Logo src={logo} />
            </a>
        </Header>
    );
}

