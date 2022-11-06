import styled from "styled-components"

interface IProps {
    number: string
    title?: string
    subtitle: string
}

export const Title = ({ number, title, subtitle }: IProps) => {
    return (
        <TitleContainer>
            <h2 className='menu-bg'>{number}.
                <div className="menu-text">
                    <span >{title}</span>
                    <span className='subtitle'>{subtitle}</span>
                </div>
            </h2>
        </TitleContainer>
    )
}

const TitleContainer = styled.header`
    
    .menu-bg {
        color: #4444444b;
        position: relative;
        max-width: 380px;
        width: 380px;
        max-height: 165px;
        min-height: 165px;
        min-width: 300px;
        font-size: 13rem;
        margin-bottom: -10px;
        font-weight: 700;
    }

    .menu-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #ececec;
        font-size: 2rem;
        font-weight: 500;
        position: absolute;
        left: 0;
        bottom: 50%;
        transform: translateY(54%);
    }

    .subtitle {
        color: var(--subtitle-color);
        font-weight: 500;
        font-size: 4.4rem;
    }
`