import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import FloatingButtons from "../FloatingButtons/FloatingButtons.jsx";
import PopUp from "../PopUp/PopUp.jsx";

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <PopUp />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
