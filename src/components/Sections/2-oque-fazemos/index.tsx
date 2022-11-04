import React from 'react'
import { Title } from '../../modulos/SessionTitle'
import { Cards } from './Cards'
import { Container, HeaderCont, TextContainer } from './styles'
import { Text } from './Text'


export const Objective: React.FC = () => {
    return(
        <Container>
            <TextContainer >
                <HeaderCont>
                    <Title number='02' title='O que Fazemos' subtitle='Games' />
                </HeaderCont>
                <Text />
            </TextContainer>
            <Cards />
        </Container>
    )
}

