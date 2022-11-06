import styled from "styled-components"

interface IProps {
    number: string
    text: string
}

export const MenuLinkMobile = ({number, text}: IProps) => {
    return(
        <LinkContainer className="bm-item">
            <p className='menu-bg'>{number}.<span className='menu-text'>/{text}</span></p>
        </LinkContainer>
    )
}

const LinkContainer = styled.li`
    .menu-bg {
        color: #0a0a0a4a;
        position: relative;
        width: 150px;
        font-size: 5.65rem;
        font-weight: 700;
    }

    .menu-text {
        color: #b6b6b6;
        font-size: 1.5rem;
        font-weight: 500;
        position: absolute;
        left: 0;
        bottom: 50%;
        transform: translateY(54%);
    }
`