import './style.css'
import Logo from '../Logo';
import MenuOpcoes from '../MenuOpcoes';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <MenuOpcoes/>
        </header>
    )
}

export default Header;