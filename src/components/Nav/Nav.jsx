import { Link } from "react-router-dom";
import "./Nav.css"
import { useCartContext } from '../../context/CartContext/useCartContext'

export const Nav = () => {

    const{getTotalItems} = useCartContext()

    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/voladores"}>Voladores</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/terrestres"}>Terrestres</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/acuaticos"}>Acuaticos</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>)}
                </li>
            </ul>
        </nav>
    );
};