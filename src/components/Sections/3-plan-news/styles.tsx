import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`
export const HeaderCont = styled(HeaderContainer)`
    display: flex;
    align-items: baseline;
    align-self: flex-start;
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

export const CardContainer = styled.div`
    display: flex;
    align-self: center;
    gap: 30px;
`

export const CardComponent = styled.div`
    max-width: 277px;
    background-color: #50505045;


    .text-container {
        padding: 20px;
        

        .card-tag {
            margin: 0;
            text-transform: uppercase;
            background-color: #c3c3c3;
            width: fit-content;
            padding: 0 5px;
            line-height: normal;
            color: #000;
            font-weight: 600;
            transition: 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }
        }

        h4 {
            margin-top: 15px;
            color: var(--subtitle-color);
            font-size: 1.9rem;
            font-weight: 500;
        }

        a {
            color: var(--subtitle-color);
            
        }

        p {
            line-height: 28px;
            font-size: 1.3rem;
            margin-top: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            
            span {
                white-space: nowrap;
            }
        }
    }
`