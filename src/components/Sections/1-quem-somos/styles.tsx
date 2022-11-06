import styled from "styled-components";
import { ContentContainer, HeaderContainer } from '../styles'
import img from '../../../images/quemsomos/quemsomos.png'

export const Container = styled(ContentContainer)`
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px 0;
    padding: 10px 25px;
    width: 90%;

    @media (max-width: 1024px) {
        margin-top: 112px;
    }
    
    .img {
        width: 100%;
        max-width: 850px;
        height: 100vh;
        background: url(${img}) center center no-repeat;
        background-size: cover;
    }`
export const HeaderCont = styled(HeaderContainer)`

`