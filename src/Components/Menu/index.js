import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className= "Logo" src={Logo} alt="42flix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                New Video
            </Button>
        </nav>
    );
}

export default Menu;