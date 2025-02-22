import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Title from './Title';

import {React, useState} from "react";
import AboutUs from "./AboutUs";
import FullPageMenu from "./FullPageMenu";
import BackToTop from "./BackToTop";

export const Layout = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="flex flex-col items-center justify-center bg-foko">
            {loggedIn ?
                <>
                    <Header className="z-10" menuToggle={toggleMenu}/>
                    <Title onClick={() => setLoggedIn(!loggedIn)}/>
                    <AboutUs/>
                    <Footer className="z-20"/>
                    <FullPageMenu isOpen={menuOpen} onClose={toggleMenu} />
                    <BackToTop />
                </>
                :
                <>
                    <Header/>
                    <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    <Footer/>
                </>
            }
        </div>
    )
}

export default Layout;