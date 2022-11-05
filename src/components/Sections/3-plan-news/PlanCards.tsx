import { Img } from "../2-oque-fazemos/styles"
import news1 from '../../../images/news/news1.png'
import news2 from '../../../images/news/news2.png'
import news3 from '../../../images/news/news3.png'
import news4 from '../../../images/news/news4.png'
import news5 from '../../../images/news/news5.png'
import styled from "styled-components"
import { VscArrowRight } from "react-icons/vsc"
import { CardContainer } from "./styles"
import { Card } from "./Card"

export const PlanCards: React.FC = () => {
    return (
        <CardContainer style={{marginTop: '20px', width: '100%', flexWrap: 'wrap'}}>
            <Card picture={news1} tag='SKA' subtitle="Plan Cria o novo site da SKA"/>
            <Card picture={news2} tag='Tintas Killing' subtitle="Plan cria o novo site para a Tintas Killing"/>
            <Card picture={news3} tag='Cargo br' subtitle="Estamos desenvolvendo o novo site da CargoBR"/>
            <Card picture={news4} tag='Xalingo' subtitle="Clubinho Xalingo com novidades"/>
            <Card picture={news5} tag='Aromatic' subtitle="Novo site da Aromatic no ar"/>
        </CardContainer>
    )
}



