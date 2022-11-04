import React from "react"
import styled from "styled-components"
import { QuemSomos } from "../Sections/1-quem-somos"
import { Objective } from "../Sections/2-oque-fazemos"
import { PlanNews } from "../Sections/3-plan-news"



export const ContentContainer = () => {
    return (
        <Container>
            <QuemSomos />
            <Objective />
            <PlanNews />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-y: scroll;
`