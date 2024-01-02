import './style.css'
import logo from '../../img/logo.png'

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo carrinho de compras'></img>
          <p><strong>Compras</strong></p>
        </div>
    );
}

export default Logo;