
import { SocialMediaCard } from "./Adress/SocialMediaCard"
import { AdressCard } from "./Adress/Adress"
import { InfoContainer, InfoWrapper } from "../styles"
import { GroupInfo } from "./GroupInfo"

export const Info: React.FC = () => {
    return(
        <InfoWrapper>
            <InfoContainer>
                <SocialMediaCard />
                <AdressCard 
                    estado='RS' 
                    rua='Rua Onze de Junho, 243 '
                    cidade="Novo Hamburgo/RS"
                    tel='+55 51 98229.0400'
                    href='https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84'/>
                <AdressCard 
                    estado='SP' 
                    rua='Rua Ibijaú, 355/Sala 1309 '
                    cidade='São Paulo/SP'
                    tel='+55 11 98871.8556'
                    href='https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620'/>
            </InfoContainer>
            <GroupInfo />
        </InfoWrapper>
    )
}

