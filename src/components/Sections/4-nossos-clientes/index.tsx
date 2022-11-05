import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { Title } from '../../modulos/SessionTitle'
import { ClientesList } from './ClientesList'
import { Container, HeaderCont } from './styles'

export const Clientes: React.FC = () => {
    return(
        <Container>
            <HeaderCont>
                <Title number='04' subtitle='/Nossos Clientes' />
                <p>O Grupo Plan Marketing ao longo dos seus 20 anos já desenvolveu mais de 3500 projetos sempre com comprometimento e prezado pela qualidade.</p>
                <a href='#'>CLIQUE AQUI PARA VER TODOS OS CLIENTES <VscArrowRight className='arrow'/></a>
            </HeaderCont>
            <ClientesList />
        </Container>
    )
}