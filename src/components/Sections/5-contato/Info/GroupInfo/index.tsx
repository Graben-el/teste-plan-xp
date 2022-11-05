import { GroupInfoCard } from "./GroupCard"
import group1 from '../../../../../images/planmark.png'
import group2 from '../../../../../images/logo.png'
import group3 from '../../../../../images/fullup.png'
import styled from "styled-components"

export const GroupInfo: React.FC = () => {
    return(
        <GroupWrapper>
            <GroupInfoCard 
                src={group1} 
                alt='plan-marketing' 
                text='A plan faz parte do grupo Plan Marketing, um grupo de comunicação completo' 
                href='https://planmkt.com.br/'/>
            <GroupInfoCard 
                src={group2} 
                alt='plan-xp' 
                text='A Plan XP é especifializada em relaidade virtual, relaidade aumentada e jogos' 
                href='https://planmkt.com.br/planxp'/>
            <GroupInfoCard 
                src={group3} 
                alt='full-up' 
                text='A FullUp é uma agência especializada em branding, design e campanhas' 
                href='https://planmkt.com.br/fullup'/>
        </GroupWrapper>
    )
}

export const GroupWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px 0;

    div {
        max-width: 230px;
    }

    img {
        max-width: 151px;
        max-height: 72px;
    }


`