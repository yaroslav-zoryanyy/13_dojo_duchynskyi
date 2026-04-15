import {Link, NavLink} from "react-router-dom";
import {FaInstagram} from "react-icons/fa6";
import {GiSmartphone} from "react-icons/gi";
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header id={'header'}>
            <div className="container">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/'}>
                            <img src={logo} alt="Logo"/>
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/'}>Головна</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/schedule'}>Графік</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/team'}>Тренери</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/price'}>Ціни</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/events'}>Події</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className={"menu__list-item-link"} to={'/cooperation'}>Співпраця</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <Link className={"menu__list-item-link social"} to={import.meta.env.VITE_API_INSTAGRAM_URL}>
                            <FaInstagram/>
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <a className={"menu__list-item-link social"} href="tel:+380677998240">
                            <GiSmartphone/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;