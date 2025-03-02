import image from '../statics/png/main-title.png';
import React, {useEffect, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";

export const Title = () => {
    const [opacity, setOpacity] = useState(0.1);
    const [translateY1, setTranslateY1] = useState(50); // First paragraph (moves up)
    const [translateY2, setTranslateY2] = useState(0); // Second paragraph (moves down)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            // Opacity: Both paragraphs fade in as you scroll
            setOpacity(Math.min(1, scrolled / 300));

            // First paragraph moves UP
            setTranslateY1(Math.max(-250, 20 - scrolled / 10));
            // Second paragraph moves DOWN
            const bottomOffset = Math.min(scrolled * 2, 600);
            setTranslateY2(bottomOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <React.Fragment>
            <div className="flex flex-col w-full bg-foko">
                <div
                    className="min-h-[50vh] w-full bg-cover bg-center bg-gray-400"
                    style={{backgroundImage: `url(${image})`}}>
                </div>
                <div className="flex min-h-[50vh] items-center justify-center text-black transform -translate-y-1/5">
                    <p className="text-start absolute left-[50px] break-words text-gray-900 transition-all duration-500"
                       style={{transform: `translateY(${translateY2}px)`,}}>BEL AIR <br/> RESIDENTIAL</p>
                    <p className="text-lg w-1/2 text-gray-900 transition-all duration-700 text-justify"
                       style={{
                           opacity: opacity,
                           transform: `translateY(${translateY1}px)`,
                       }}> Welcome to FOKO STUDIO , where
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
                    <MiniSlideShow/>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Title;

