import { VscArrowSmallRight } from 'react-icons/vsc'
import { FormTwo } from './styles';

export const BottomLink = () => {
    return (
        <FormTwo>
            <a href="#">
                <div className='container'>
                    <div className="text-card">
                        <p className='menu-bg ft-bg'>,)<span className='menu-text ft-text'>Que tal inovar com a gente? </span></p>
                    </div>
                    <VscArrowSmallRight className='arrow' />
                </div>
            </a>
        </FormTwo>
    );
}
