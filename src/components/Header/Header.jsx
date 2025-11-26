import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css"

export const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src="../images/Element.png" alt="logo" />
                <Link to={"/"}>ElementShop</Link>
            </div>
            <Nav/>
        </header>
    ); 
};