import React from "react"
import { Element } from "react-scroll"
import styled from "styled-components"
import { QuemSomos } from "../Sections/1-quem-somos"
import { Objective } from "../Sections/2-oque-fazemos"
import { PlanNews } from "../Sections/3-plan-news"
import { Clientes } from "../Sections/4-nossos-clientes"
import { Contato } from "../Sections/5-contato"


export const ContentContainer = () => {
    return (
        <Container id='container'>
            <Element name='quem-somos' className="element-reset">
                <QuemSomos />
            </Element>
            <Element name='oque-fazemos' className="element-reset">
                <Objective />
            </Element>
            <Element name='plan-news'  className="element-reset">
                <PlanNews />
            </Element>
            <Element name='clientes' className="element-reset">
                <Clientes />
            </Element>
            <Element name='contato' className='element-reset'>
                <Contato />
            </Element>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    align-items: center;

    .element-reset {
        width: 100%;
    }
`