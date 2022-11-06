import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 35px;
    width: 90%;
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
    max-width: 550px;

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
            font-size: 1.8rem;
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
    cursor: pointer;

    .games {
        width: 200px;
    }
`

