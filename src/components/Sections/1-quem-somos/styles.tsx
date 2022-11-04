import styled from "styled-components";
import { ContentContainer, HeaderContainer } from '../styles'
import img from '../../../images/quemsomos/quemsomos.png'

export const Container = styled(ContentContainer)`
    flex-wrap: wrap;
    .img {
        width: 100%;
        max-width: 500px;
        height: 100vh;
        background: url(${img}) center center no-repeat;
        background-size: cover;
    }`
export const HeaderCont = styled(HeaderContainer)`

`