import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    min-height: 100vh;    
`

export const HeaderContainer = styled.div`
    align-self: center;

    p {
        max-width: 560px;
        width: fit-content;
        line-height: 25px;
        font-size:1.3rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    gap: 25px;
    align-self: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 150px;

    .last-card {
        div {
            width: 200px;
            height: 200px;
            display: flex;

            .control {
                font-size: 4rem;
                align-self: flex-end;
            }
        }

        p {
            font-size: 2.3rem;
            line-height: 36px;
            margin-bottom: 30px;
        }

        a {
            text-transform: uppercase;
            font-size: 1.4rem;
            color: #939598;
            transition: 0.2s ease-in-out;

            &:hover{
                opacity: 0.7;
            }

            .arrow {
                transform: rotate(45deg);
                color: #fff;
                font-size: 1.6rem;
            }
        }
    }
`

export const Card = styled.div`

    max-width: 200px;
    

    p {
        line-height: 28px;
        font-size: 1.3rem;
        margin-top: 15px;
    }


    
`