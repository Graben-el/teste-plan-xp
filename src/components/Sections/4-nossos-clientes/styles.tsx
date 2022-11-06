import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    /* gap: 0 20px; */
    padding: 10px 0 10px 25px;
    width: 95%;
`
export const HeaderCont = styled(HeaderContainer)`
    max-width: 800px;
    width: 100%;
    
    p {
        max-width: 600px;
        margin-bottom: 10px;
    }

    a, a:visited {
        color: var(--subtitle-color);
        text-transform: uppercase;
        font-size: 1.3rem;
        transition: 0.2s ease-in-out;

        &:hover {
            opacity: 0.7
        }
    }
`

export const ClientsContainer = styled.div`
    max-width: 800px;
    min-width: 417px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-height: 417px;
    min-height: 417px;
    flex: 1;
    
    @media (max-width: 1954px) {
        align-self: flex-start;
    }
    
    @media (max-width: 947px) {
        overflow-y: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }



    img {
        max-width: 195px;
        transition: 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`