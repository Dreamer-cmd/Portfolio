import { useState } from "react";
import { ReactComponent as MenuIcon } from '../assets/icons/menuIcon.svg';
import { ReactComponent as X } from "../assets/icons/X.svg";
import "../assets/css/dist/styles.css";

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    const navlinks = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];
    
    return (
        <>
            <nav>
                <h3 onClick={pageUp} className="logo">
                    Maxim.dev
                </h3>
                <ul>
                    {navlinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li onClick={() => hamburgerMenu()}>
                        <MenuIcon className="mobile-menu" width={30} height={30} />
                    </li>
                </ul>
            </nav>
            
            {/* mobile nav */}
            <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => hamburgerMenu()}>
                    <X width={30} height={30} />
                </span>
                <ul>
                    {navlinks.map((item) => (
                        <li key={item.name} onClick={() => hamburgerMenu()}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar;