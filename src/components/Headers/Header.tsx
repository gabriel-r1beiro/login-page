import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import { Link } from "react-router-dom";

import style from "./style.module.css";
import { useState } from "react";

export const Header = () => {
    const [activeLink, setActivelink] = useState<string>("");

    const handleLinkActive = (link: string) => setActivelink(link)
    return (
        <header className={style.header}>
            <img src="/ribeiro.png"/>

            <nav className={style.navbar}>
                <ul>
                    <li className={activeLink === "Home" ? style.active : ""}>
                        <a onClick={ () => handleLinkActive("Home")}>
                            Home
                        </a>
                    </li>
                    <li className={activeLink === "About" ? style.active : ""}>
                        <a onClick={ () => handleLinkActive("About")}>
                            About
                        </a>
                    </li>
                    <li className={activeLink === "Tours" ? style.active : ""}>
                        <a onClick={ () => handleLinkActive("Tours")}>
                            Tours
                        </a>
                    </li>
                    <li className={activeLink === "Contact Us" ? style.active : ""}>
                        <a onClick={ () => handleLinkActive("Contact Us")}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={style.right}>
                <ButtonTheme />
                <a><Link to="/login">Login</Link></a>
                <a href="#">Sign up</a>
            </div>
        </header>
    )
}
