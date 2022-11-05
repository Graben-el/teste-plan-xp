import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Card, SocialMedia } from '../../styles'

export const SocialMediaCard: React.FC = () => {
    return (
        <Card>
            <h3>Siga-nos</h3>

            <p>Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>

            <SocialMedia>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
            </SocialMedia>
        </Card>

    )
}