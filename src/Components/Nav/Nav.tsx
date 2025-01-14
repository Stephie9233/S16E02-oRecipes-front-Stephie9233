import './Nav.css';
import Logo from '../Logo/Logo';
import FormConnection from '../FormConnection/FormConnection';

function Nav() {
    return (
        <>
            <nav className='header__ctn--nav'>
                <Logo />
                <FormConnection />
                
            </nav>
        </>
    )
}

export default Nav;
