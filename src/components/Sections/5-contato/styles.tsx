import styled from "styled-components";
import { ContentContainer, HeaderContainer } from "../styles";

export const Container = styled(ContentContainer)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 25px;
    margin-bottom: 50px;
    width: 90%;

    .left-container {
        max-width: 630px;
        width: 100%;

        .p {
           max-width: 100%;
           width: 100%;
        }
    }
`
export const HeaderCont = styled(HeaderContainer)`
    margin-bottom: 30px;
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
        &:hover {
            opacity: 0.7;
        }
    }
    textarea {
        resize: vertical;
        height: 110px;
    }

    label {
        font-size: 1.3rem;
    }

    input, textarea {
        border: 2px solid #292929;
        padding: 4px;
        outline: none;
        background-color: transparent;
        color: #e9e9e9;
        border-top-right-radius: 13px;
        transition: 0.2s ease-in-out

       
    }

    .wrapper {
        margin: 20px 0;
        display: flex;
        gap: 30px;

        .input-wrapper {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 100%;
            
            input {
                max-width: 294px;
                width: 100%;
            }
        }
    }

    .submit-wrapper {
        margin: 30px 0;

        .submit {
            border: none;
            color: var(--subtitle-color);
            text-transform: uppercase;
        }
    }
`

export const InfoContainer =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px 0 ;

    div {
        max-width: 230px;
    }
`


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    max-height: 200px;
    width: 100%;

    p {
        font-size: 1.3rem;
        line-height: 30px;
        max-width: 200px;
    }

    h3 {
        font-size: 2rem;
        color: var(--subtitle-color);
    }

    .adress {
        line-height: 15px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    height: fit-content;

    .icon {
        color: #363636;
        background-color: var(--subtitle-color);
        font-size: 3rem;
        border-radius: 50%;
        padding: 7px;
        transition: 0.3s ease-in-out;

        &:hover{
            transform: scale(1.05);
            cursor: pointer;
            opacity: 0.8;
        }

    }
`

export const InfoWrapper = styled.div`
    max-width: 750px;
    display: flex;
    width: 750px;
    flex-direction: column;
    gap: 70px;
`