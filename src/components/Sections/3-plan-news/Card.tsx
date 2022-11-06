import { VscArrowRight } from "react-icons/vsc"
import styled from "styled-components"
import { Img } from "../2-oque-fazemos/styles"
import { CardComponent } from "./styles"

interface ICard {
    picture: string
    tag: string
    subtitle: string
}

export const Card = ({picture, tag, subtitle}: ICard) => {
    return (
        <CardComponent>
            <Img><img src={picture} alt={tag} /></Img>
            <div className="text-container">
                <header>
                    <p className='card-tag'>{tag}</p>
                    <h4 className="subtitle">{subtitle}</h4>
                </header>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, sapiente. <span>Cupiditate dicta modi eius doloribus iste rem earum numquam? Porro, omnis voluptas aperiam error accusamus ipsum ea facere non ad?</span></p>

                <a href="#">
                    <p>Saiba Mais <VscArrowRight className='arrow' /></p>
                </a>
            </div>
        </CardComponent>
    )
}

