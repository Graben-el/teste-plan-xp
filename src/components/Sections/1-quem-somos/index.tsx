import React from 'react'
import { Title } from '../../modulos/SessionTitle'

import { Container, HeaderCont } from './styles'

export const QuemSomos: React.FC = () => {
    return(
        <Container>
            <HeaderCont>
                <Title number='01' title='Quem Somos' subtitle='Plan XP'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit commodi esse necessitatibus quam beatae, aliquid, eius rerum sapiente officia culpa consectetur? Sequi mollitia officiis molestiae labore asperiores fuga eligendi. Eaque impedit commodi esse necessitatibus quam beatae, aliquid, eius rerum sapiente officia culpa consectetur? Sequi mollitia officiis molestiae labore asperiores fuga eligendi.</p>
            </HeaderCont>
            <div className='img'></div>
        </Container>
    )
}

