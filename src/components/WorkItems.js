import image from '../statics/png/main-title.png';
import React from "react";
import MiniSlideShow from "./MiniSlideShow";

export const Title = () => {
    return (
        <React.Fragment>
            <div
                className="h-[350px] w-full bg-cover bg-center bg-gray-400"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="flex h-screen items-center justify-center text-black">
                <p className="m-foko">BEL AIR RESIDENTIAL</p>
                <p className="m-foko text-justify bg-gradient-to-b from-black via-gray-900 to-gray-500 bg-clip-text text-transparent">      Welcome to FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is dedicated to transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects...      Welcome to FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is dedicated to transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects...dedicated to transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our proje</p>
            </div>
            <div className="flex w-full h-screen items-center justify-center text-black">
                <p>PROJECT TYPE
                    RESIDENTIAL
                    DATE
                    2022
                    STATUS
                    completed
                    LOCATION
                    Bel Air</p>
                <MiniSlideShow />
            </div>
        </React.Fragment>
    )
}

export default Title;

