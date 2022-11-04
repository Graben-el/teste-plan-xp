import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    display: block;
    text-align: left;
    transform: translateY(25%);
`
export const HeaderCont = styled(HeaderContainer)`
    display: flex;
    align-items: baseline;

    p {
        color: var(--subtitle-color);
        text-transform: uppercase;
        font-size: 1.4rem;
    }

    a {
        transition: 0.2s ease-in-out;
     
        &:hover {
            opacity: 0.7;
        }
    }
    .link {
        transform: translateY(-40%);
    }
`

