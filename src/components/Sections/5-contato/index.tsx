import React from 'react'
import { Title } from '../../modulos/SessionTitle'
import { Container, HeaderCont } from './styles'

export const Contato: React.FC = () => {
    return(
        <Container>
            <HeaderCont>
                <Title number='05' subtitle='/Contato' />
                <p>Gostou de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinitas possibilidades do mundo virtual.</p>
            </HeaderCont>

        </Container>
    )
}