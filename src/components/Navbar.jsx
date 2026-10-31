import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/projects", "Projects"],
    ["/gallery", "Gallery"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="topbar">
                <div className="container topbar-inner">
                    <span>
                        Helpline Number:{" "}
                        <a href="tel:  +9779852024365">+977-9852024365</a>
                    </span>
                    <div className="socials">
                        <a href="https://facebook.com" aria-label="Facebook">
                            f
                        </a>
                        <a
                            href="https://Linkedin.com
                        "
                            aria-label="Linkedin"
                        >
                            in
                        </a>
                        <a href="https://Pinterest.com" aria-label="Pinterest">
                            p
                        </a>
                    </div>
                </div>
            </div>

            <header className="nav">
                <div className="container nav-inner">
                    <Link to="/" className="logo">
                        <img
                            src="/favicon/favicon-64x64.png"
                            alt=""
                            className="logo-icon"
                        />
                        Garden Ghar
                    </Link>
                    <button
                        className="menu-btn"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        ☰
                    </button>
                    <nav
                        className={open ? "links open" : "links"}
                        onClick={() => setOpen(false)}
                    >
                        {links.map(([to, label]) => (
                            <NavLink key={to} to={to} end={to === "/"}>
                                {label}
                            </NavLink>
                        ))}
                        <Link to="/book" className="btn">
                            Book a Service
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
