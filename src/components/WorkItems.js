import image from '../statics/png/main-title.png';
import React, {useEffect, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";
import Header from "./Header";
import FullPageMenu from "./FullPageMenu";

export const Title = () => {
    const [opacity, setOpacity] = useState(0.1);
    const [translateY, setTranslateY] = useState(40);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            let scrollY = window.scrollY;
            setOpacity(Math.min(1, scrollY / 300));
            setTranslateY(Math.max(0, 40 - scrollY / 10));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <React.Fragment>
            <Header className="z-10" menuToggle={toggleMenu}/>
            <div className="flex flex-col w-full bg-foko">
                <div
                    className="min-h-[50vh] w-full bg-cover bg-center bg-gray-400"
                    style={{backgroundImage: `url(${image})`}}>
                </div>
                <div className="flex min-h-[50vh] items-center justify-center text-black transform -translate-y-1/5">
                    <p className="text-start absolute left-[50px] break-words">BEL AIR <br/> RESIDENTIAL</p>
                    <p className="m-foko w-1/2 text-justify transition-all duration-500 bg-gradient-to-b from-black via-gray-900 to-gray-400 bg-clip-text text-transparent"
                       style={{opacity, transform: `translateY(${translateY}px)`}}> Welcome to FOKO STUDIO , where
                        innovation meets tradition in the world of architecture. Our team of passionate architects and
                        designers is dedicated to transforming spaces into timeless masterpieces. With a blend of
                        cutting-edge technology and sustainable practices, we create environments that inspire and
                        endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our
                        projects... Welcome to FOKO STUDIO , where innovation meets tradition in the world of
                        architecture. Our team of passionate architects and designers is dedicated to transforming
                        spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable
                        practices, we create environments that inspire and endure. At [Your Firm’s Name], we believe in
                        the power of collaboration and creativity. Our projects...dedicated to transforming spaces into
                        timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we
                        create environments that inspire and endure. At [Your Firm’s Name], we believe in the power of
                        collaboration and creativity. Our project</p>
                </div>
                <div className="flex w-full h-[50vh] items-center justify-center text-black">
                    <p className="text-start absolute left-[50px] break-words">BEL AIR <br/> RESIDENTIAL</p>
                    <MiniSlideShow/>
                </div>
            </div>
            <FullPageMenu isOpen={menuOpen} onClose={toggleMenu}/>
        </React.Fragment>
    )
}

export default Title;

