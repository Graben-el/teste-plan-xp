import { VscArrowRight } from "react-icons/vsc"
import { Card } from "../../styles"

interface Props {
    src: string
    alt: string
    text: string
    href: string
}

export const GroupInfoCard = ({src, alt, text, href} : Props) => {
    return(
        <Card>
            <img src={src} alt={alt} />
            <p>{text}</p>
            <a className="link" href={href} target='_blank'>Conheça <VscArrowRight className="arrow"/></a>
        </Card>
    )
}