import {FiSearch, FiUser, FiHeart, FiShoppingCart} from 'react-icons/fi';

import "./index.css";
import logoImg from './logo.png';

function Cabecalho() {
    return (
        <header>
            <div className="logo">
                <img src={logoImg} alt="Miniminions"/>
            </div>
            <div className="icones">
                <a href=""><FiSearch size={30}  color="rgba(0, 0, 0, 0.6)"/></a> 
                <a href=""><FiUser size={30}  color="rgba(0, 0, 0, 0.6)"/></a>
                <a href=""><FiHeart size={30}  color="rgba(0, 0, 0, 0.6)"/></a>
                <a href=""><FiShoppingCart size={30} color="rgba(0, 0, 0, 0.6)"/></a>
            </div>
            <div className="texto">
                <p>Deixe a sua casa mais feliz com os 
          amarelinhos mais fofos do universo conhecido</p>
            </div>
        </header>
    )
}


export default Cabecalho;