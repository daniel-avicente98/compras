import './style.css'

const menuOpcoes = ['RELATÓRIOS', 'TO-DO', 'CADASTROS'];

function MenuOpcoes() {
    return (
        <ul className='opcoes'>
            {menuOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default MenuOpcoes;