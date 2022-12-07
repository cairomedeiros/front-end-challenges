import logo from '../../assets/pngegg.png';
import logotwo from '../../assets/Rick_and_Morty_logo.png'
import { Topo } from './styleHeader';

function Header(){
    return(
        <Topo>
            <img className="imgum" src={logo}/>
            <img className="imgdois" src={logotwo}/>
        </Topo>
    )
}

export default Header;