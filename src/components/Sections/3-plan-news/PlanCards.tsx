import { Img } from "../2-oque-fazemos/styles"
import { Card, CardContainer } from "../styles"
import news1 from '../../../images/news/news1.png'
import news2 from '../../../images/news/news2.png'
import news3 from '../../../images/news/news3.png'
import news4 from '../../../images/news/news4.png'
import news5 from '../../../images/news/news5.png'

export const PlanCards: React.FC = () => {
    return (
        <CardContainer style={{marginTop: '20px', width: '100%', flexWrap: 'wrap'}}>
            <Card className='card'>
                <Img><img src={news1}  alt='' /></Img>
                <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
            </Card>
            <Card className='card'>
                <Img><img src={news2} alt='' /></Img>
                <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
            </Card>
            <Card className='card'>
                <Img><img src={news3} alt='' /></Img>
                <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
            </Card>
            <Card className='card'>
                <Img><img src={news4} alt='' /></Img>
                <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
            </Card>
            <Card className='card'>
                <Img><img src={news5} alt='' /></Img>
                <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>gamificação</strong> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</p>
            </Card>
        </CardContainer>
    )
}