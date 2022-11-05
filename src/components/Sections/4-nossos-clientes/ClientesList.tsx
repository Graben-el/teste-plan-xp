import client1 from '../../../images/clientes/atlas.png'
import client2 from '../../../images/clientes/azul.png'
import client3 from '../../../images/clientes/betanin.png'
import client4 from '../../../images/clientes/dass.png'
import client5 from '../../../images/clientes/fila.png'
import client6 from '../../../images/clientes/gerdau.png'
import client7 from '../../../images/clientes/kisafix.png'
import client8 from '../../../images/clientes/taurus.png'
import client9 from '../../../images/clientes/killing.png'
import { ClientsContainer } from './styles'


export const ClientesList: React.FC = () => {
    return (
        <ClientsContainer>
            <img src={client1} alt="atlas" />
            <img src={client2} alt="azul" />
            <img src={client3} alt="betanin" />
            <img src={client4} alt="dass" />
            <img src={client5} alt="fila" />
            <img src={client6} alt="gerdau" />
            <img src={client7} alt="kisafix" />
            <img src={client8} alt="taurus" />
            <img src={client9} alt="killing" />
        </ClientsContainer>
    )
}

