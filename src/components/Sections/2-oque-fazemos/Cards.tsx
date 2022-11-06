import { GiConsoleController } from "react-icons/gi"
import { VscArrowRight } from "react-icons/vsc"
import games1 from '../../../images/games/games1.png'
import games2 from '../../../images/games/games2.png'
import games3 from '../../../images/games/games3.png'
import { Card, CardContainer } from "../styles"
import {  Img } from "./styles"

export const Cards: React.FC = () => {
    return(
        <CardContainer>
                <Card className='card hover-card' >
                    <Img><img src={games1} alt='games1'  className="games"/></Img>
                    <p>A <strong>Plan XP</strong> tem uma equipe qualificada para o <strong>desenvolvimento de jogos</strong> para <strong>dispositivos móveis</strong> (smartphones, tablets e afins)</p>
                </Card>
                <Card className='card hover-card' >
                    <Img><img src={games2} alt='games2'  className="games"/></Img>
                    <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
                </Card>
                <Card className='card hover-card' >
                    <Img><img src={games3} alt='games3'  className="games"/></Img>
                    <p>Utilizando as últimas tecnologias para a <strong>criação de games</strong>, trabalhamos de acordo com as necessidades dos cliente, sempre buscando oferecer o resultado que ele busca</p>
                </Card>
                <Card className='card last-card card hover-card'>
                    <div>
                        <GiConsoleController className="control"/>
                    </div>
                    <p>
                        Experimente inovar com a <strong>PlanXP</strong> para <strong>desenvolver os seus jogos digitais!</strong>
                    </p>
                    <a href='/'>Entre em contato agora mesmo <VscArrowRight className="arrow"/></a>
                </Card>
            </CardContainer>
    )
}

