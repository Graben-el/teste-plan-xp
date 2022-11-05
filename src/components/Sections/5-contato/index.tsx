import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { Title } from '../../modulos/SessionTitle'
import { Form } from './Form/Form'
import { Info } from './Info'
import { Container, HeaderCont } from './styles'

export const Contato: React.FC = () => {
    return(
        <Container>
            <div className="left-container">
                <HeaderCont>
                    <Title number='05' subtitle='/Contato' />
                    <p className='p'>Gostou de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinitas possibilidades do mundo virtual.</p>
                </HeaderCont>
                <Form />
            </div>
            <Info />
        </Container>
    )
}