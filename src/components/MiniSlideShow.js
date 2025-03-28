import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Optional for smooth transition
import image01 from "../statics/png/projects/01/01.png";
import image02 from "../statics/png/projects/01/02.png";
import image03 from "../statics/png/projects/01/03.png";
import image04 from "../statics/png/projects/01/04.png";
import image05 from "../statics/png/projects/01/05.png";
import image06 from "../statics/png/projects/01/06.png";
import image07 from "../statics/png/projects/01/07.png";
import leftArrow from "../statics/svg/left-arrow.svg";
import rightArrow from "../statics/svg/right-arrow.svg";
import close from "../statics/svg/black-close.svg";
import plusIcon from "../statics/svg/plus-btn.svg"; // Assuming you have a plus icon

const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
];

const MiniScreenSlideshow = () => {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="relative w-full h-auto aspect-[2/1]">
            {/* Image Transition */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Slideshow"
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 w-1/4 transform -translate-y-1/2 bg-black bg-opacity-0 text-white hover:bg-opacity-0"
            >
                <img src={leftArrow} alt="previous slide" className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] m-[10px] md:m-foko" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 w-1/4 transform -translate-y-1/2 bg-black bg-opacity-0 text-white hover:bg-opacity-0"
            >
                <img src={rightArrow} alt="next slide" className="flex justify-self-end w-[15px] h-[15px] md:w-[20px] md:h-[20px] m-[10px] md:m-foko" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-[10px] h-[10px] rounded-full cursor-pointer ${index === i ? "bg-black" : "border-[1px] border-black bg-transparent"}`}
                    ></span>
                ))}
            </div>

            {/* Plus Icon */}
            <button
                onClick={() => openModal(images[index])}
                className="absolute top-8 left-32 p-2 rounded-full shadow-lg"
            >
                <img src={plusIcon} alt="open modal" className="w-[20px] h-[20px]" />
            </button>

            {/* Fullscreen Modal */}
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-full h-full relative bg-foko flex justify-center items-center max-w-full max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-[30px] right-[30px]"
                        >
                            <img src={close} alt="close" width='30px' height='30px' className="filter grayscale"/>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Fullscreen"
                            className="w-full max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiniScreenSlideshow;
