import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 800) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="henkilökuva"/>
                </div>
                <div className="list-wrapper">
                    <img src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true" 
                        alt="Menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                        />
                    <img src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true" 
                        alt="Menu cross"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                        />

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#bb99ff" }}
                                to="/">Home</Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleClose}
                                style={{ color: location.pathname === "/about" && "#bb99ff" }}
                                to="/about">About</Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleClose}
                                style={{ color: location.pathname === "/skills" && "#bb99ff" }}
                                to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleClose}
                                style={{ color: location.pathname === "/contact" && "#bb99ff" }}
                                to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>        
            </div>
        </nav>
    )
}

export default NavBar
