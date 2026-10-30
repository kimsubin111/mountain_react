import React, { useState } from "react";
import { header } from "../data/data";

const Header = () => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <header id="header">
            <div className="header_inner">
                <div className="header_logo">
                    <h1>
                        <a href="/">
                            MOUNTAINS <em>REACT</em>
                        </a>
                    </h1>
                </div>

                <div className={`header_nav ${show ? "show" : ""}`}>
                    <ul>
                        {header.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.link}>{menu.menu}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="headerToggle" className="header_nav_mobile" onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
