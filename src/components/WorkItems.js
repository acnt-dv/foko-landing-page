import image from '../statics/png/main-title.png';
import React, {useEffect, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";
import FadingTextBox from "./FadingTextBox";

export const Title = () => {
    const [opacity, setOpacity] = useState(0.1);
    const [translateY1, setTranslateY1] = useState(50); // First paragraph (moves up)
    const [translateY2, setTranslateY2] = useState(0); // Second paragraph (moves down)

    const textLines =
        `Welcome to FOKO STUDIO , where innovation meets tradition in the world of architecture. 
        Our team of passionate architects and designers is dedicated to transforming spaces into 
        timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, 
        we create environments that inspire and endure. At [Your Firm’s Name], we believe in the 
        power of collaboration and creativity. Our projects... Welcome to FOKO STUDIO , where innovation 
        meets tradition in the world of architecture. 
        Our team of passionate architects and designers is dedicated to transforming
        spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable
        practices, we create environments that inspire and endure. At [Your Firm’s Name], we believe in
        the power of collaboration and creativity. Our projects...dedicated to transforming spaces into
        timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we
        create environments that inspire and endure. At [Your Firm’s Name], we believe in the power of
        collaboration and creativity. Our project`


    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            // Opacity: Both paragraphs fade in as you scroll
            setOpacity(Math.min(1, scrolled / 300));

            // First paragraph moves UP
            setTranslateY1(Math.max(-250, 20 - scrolled / 10));
            // Second paragraph moves DOWN
            const bottomOffset = Math.min(scrolled * 2, 300);
            setTranslateY2(bottomOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col w-full bg-foko">
            <div
                className="min-h-[50vh] w-full bg-cover bg-center bg-gray-400"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="flex w-full items-start justify-start xl:justify-center text-black">
                <div className="flex justify-center items-center mt-[30px] xl:mt-[50px]">
                    <p className="mx-[30px] xl:mx-[50px] font-rubik text-16 xl:text30 text-start break-words text-gray-900 transition-all duration-500"
                       style={{transform: `translateY(${translateY2}px)`,}}>BEL AIR <br/> RESIDENTIAL
                    </p>
                </div>
                <div className="flex-col space-y-16 items-center justify-end mr-[30px] xl:justify-center text-black mb-[150px]">
                    <FadingTextBox text={textLines}/>
                    <MiniSlideShow/>
                </div>
            </div>
        </div>
    )
}

export default Title;

