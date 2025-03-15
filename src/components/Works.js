import image from '../statics/png/main-title.png';
import React, {useEffect, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";
import FadingTextBox from "./FadingTextBox";

export const Works = () => {
    const [maxTranslate, setMaxTranslate] = useState(window.innerHeight * 0.75);
    const [translateY, setTranslateY] = useState(0);

    const textLines =
        `Welcome to FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is 
        dedicated to transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create 
        environments that inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects... Welcome to 
        FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is dedicated to 
        transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that 
        inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects...dedicated to transforming spaces
        into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that inspire and endure. At 
        [Your Firm’s Name], we believe in the power of collaboration and creativity. Our project`

    useEffect(() => {
        const updateMaxTranslate = () => {
            if (window.innerWidth >= 768) {
                // 'md' breakpoint in Tailwind (768px)
                setMaxTranslate(window.innerHeight * 0.47);
            } else {
                setMaxTranslate(window.innerHeight * 0.75);
            }
        };

        // Initial check
        updateMaxTranslate();

        // Listen for resize events
        window.addEventListener("resize", updateMaxTranslate);
        return () => window.removeEventListener("resize", updateMaxTranslate);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const position = window.scrollY;

            // // Limit the movement to 3/4 of the screen height /75 /47
            // const maxTranslate = window.innerHeight * 0.47;

            // Update the scroll position but cap at maxTranslate
            setTranslateY(Math.min(position, maxTranslate));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col w-full bg-foko">
            <div
                className="min-h-[75vh] w-full bg-cover bg-center bg-gray-400"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="flex w-full items-start justify-start sm:justify-center text-black">
                <div className="flex justify- items-center mt-[30px] md:mt-[50px]">
                    <p className="mt-[30px] md:mt-[150px] mx-[30px] md:mx-[50px] md:absolute md:left-[50px] font-rubik text-10 md:text-16 md:text30 text-start break-words -translate-y-1/2 text-gray-900 transition-transform duration-300"
                       style={{transform: `translateY(${translateY}px)`,}}>BEL AIR <br/> RESIDENTIAL
                    </p>
                </div>
                <div className="flex-col space-y-16 items-center justify-end mr-[30px] md:mr-0 text-black mb-[150px]">
                    <FadingTextBox text={textLines}/>
                    <MiniSlideShow/>
                </div>
            </div>
        </div>
    )
}

export default Works;

