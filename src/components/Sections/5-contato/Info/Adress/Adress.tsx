import { Card } from "../../styles"
import { FaMapMarkerAlt } from "react-icons/fa"
import { VscArrowRight } from "react-icons/vsc"

interface Props {
    estado: string
    rua: string
    tel: string
    href: string
    cidade: string
}

export const AdressCard = ({estado, rua, cidade, tel, href}: Props) => {
    return (
        <Card>
            <h3>
                <FaMapMarkerAlt />
                /{estado}
            </h3>
            <p className='adress'>{rua}</p>
            <p className='adress'>{cidade}</p>
            <p className='adress'>Brasil</p>
            <p>{tel}</p>
            <a href={href} target='_blank' className="link">Ver no Google Maps <VscArrowRight className="arrow"/></a>
        </Card>
    )
}