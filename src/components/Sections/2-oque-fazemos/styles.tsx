import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    align-items: baseline;
`
export const HeaderCont = styled(HeaderContainer)`
    display: flex;
    width: fit-content;
    align-items: baseline;
    gap: 20px;
    
    .menu-bg {
        min-width: fit-content;
        width: fit-content;
    }
`

export const TextContainer = styled.div`
    align-self: center;
    max-width: 700px;

    div {
        display: flex;
        flex-direction: column;
        gap: 30px;

        h3 {
            color: #939598;
            font-weight: 500;
            font-size: 2.5rem;
        }

        p {
            color: #939598;
        }

        .lorem {
            line-height: 32px;
            font-size: 1.3rem;
            color: #fff;
        }
    }
`

export const Img = styled.div`
    width: 200px;
`

