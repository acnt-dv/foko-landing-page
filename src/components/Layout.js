import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Title from './Title';

import {React, useState} from "react";

export const Layout = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-foko">
            {loggedIn ?
                <Title onClick={() => setLoggedIn(!loggedIn)}/>
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