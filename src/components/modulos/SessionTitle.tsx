import styled from "styled-components"

interface IProps {
    number: string
    text: string
}

export const Title = ({number, text}: IProps) => {
    return(
        <TitleContainer>
            <h2 className='menu-bg'>{number}.<span className='menu-text'>/{text}</span></h2>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    .menu-bg {
        color: #4444444b;
        position: relative;
        width: auto;
        font-size: 5.65rem;
        font-weight: 700;
    }

    .menu-text {
        color: #ececec;
        font-size: 1.5rem;
        font-weight: 500;
        position: absolute;
        left: 0;
        bottom: 50%;
        transform: translateY(54%);
    }
`