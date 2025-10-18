import { Nav } from "../Nav/Nav";
import "./Header.css"

export const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src="../images/Element.png" alt="logo" />
                <h2>ElementShop</h2>
            </div>
            <Nav/>
        </header>
    ); 
};