import { ContentContainer } from "../components/modulos/ContentContainer"
import { Routes, Route } from 'react-router-dom'
import { QuemSomos } from "../components/Sections/1-quem-somos"
import { Objective } from "../components/Sections/2-oque-fazemos"
import { PlanNews } from "../components/Sections/3-plan-news"

export const AppDisplay = () => (
    <Routes>
        <Route exact path='/' element={<ContentContainer />} />
        <Route exact path='/' element={<QuemSomos />} />
        <Route exact path='/' element={<Objective />} />
        <Route exact path='/' element={<PlanNews />} />
    </Routes>
)

            
            