import { HeaderContainer } from './styles';
import { Nav } from './Nav';
import { BottomLink } from './BottomLink';
import { Logo } from './Logo';

export const Header: React.FC = () => {
    return (
        <HeaderContainer >
            <Logo />
            <Nav />
            <BottomLink />      
        </HeaderContainer>
    );
}

