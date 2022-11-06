import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import styled from 'styled-components'
import { Title } from '../../modulos/SessionTitle'
import { PlanCards } from './PlanCards'
import { Container, HeaderCont } from './styles'

export const PlanNews: React.FC = () => {
    return(
        <>
            <Container id='plan-news'>
                <HeaderCont>
                    <Title number='03' title='/Plan News' subtitle='/Cases Games' />
                    <a href='/'>
                        <p className='link'>Clique aqui para ver todo o blog <VscArrowRight className='arrow'/></p>
                    </a>
                </HeaderCont>
                <PlanCards />
            </Container>
        </>
    )
}