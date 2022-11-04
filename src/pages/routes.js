import { ContentContainer } from "../components/modulos/ContentContainer"
import {Routes, Route} from 'react-router-dom'

export const AppDisplay = () => {
    <Routes>
        <Route exact path='/' element={<ContentContainer />} />
    </Routes>
}