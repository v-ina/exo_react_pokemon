import { Link } from "react-router-dom"
import './Header.scss'

function Header(){
    return(
        <nav>
            <ul>
                <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" alt="" /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pokemonlist">Pokemonlist</Link></li>
            </ul>
        </nav>
    )
}
export default Header