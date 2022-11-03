import logo from '../../images/logo.png'
import { LogoContainer } from './styles';

export const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <a href='/'>
                <img src={logo} />
            </a>
        </LogoContainer>
    );
}