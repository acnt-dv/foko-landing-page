import React from "react";
import profileImage from "../statics/profile-image.jpg"; // Replace with actual image path

const ProfileCard = () => {
    return (
        <div className="flex bg-[#e5e0d5] min-h-screen p-10 justify-center">
            {/* Left Section (Image + Red Bars) */}
            <div className="relative w-1/3 flex flex-col items-center">
                {/* Top Red Bar */}
                <div className="absolute top-0 left-0 w-2 h-10 bg-red-600"></div>

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="Jenny Fontenot"
                    className="w-full max-w-md object-cover shadow-lg"
                />

                {/* Bottom Red Bar */}
                <div className="absolute bottom-0 left-0 w-2 h-10 bg-red-600"></div>
            </div>

            {/* Right Section (Text Content) */}
            <div className="w-2/3 px-10">
                {/* Name and Title */}
                <h1 className="text-2xl font-bold">JENNY FONTENOT, RA</h1>
                <h2 className="text-lg font-light uppercase mt-2">Co-Founder</h2>

                {/* Description */}
                <p className="mt-4 text-gray-800 text-sm leading-6">
                    Jenny is the co-founder and Architectural Director of FOKO Studio. She is a licensed architect with a passion
                    for creating positive impact for individuals and communities through shaping the built environment. With over
                    10 years of experience in various typologies and scales, including retail, institutional, residential,
                    workplace, and adaptive-reuse projects, Jenny has developed a diverse portfolio that showcases her versatility
                    and expertise.
                </p>

                <p className="mt-4 text-gray-800 text-sm leading-6">
                    As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and understanding
                    of different building regulations, allowing her to navigate complex projects while seeking innovative design
                    solutions. Jenny sees the value in every detail and approaches each design challenge with an enthusiastic
                    mindset, eager to unravel its puzzle-like nature.
                </p>

                <p className="mt-4 text-gray-800 text-sm leading-6">
                    Extending beyond traditional architecture, Jenny’s interests include furniture and product design. She
                    believes in creating holistic and captivating experiences for users through design and collaboration at all
                    scales.
                </p>

                {/* Education Section */}
                <div className="mt-8 relative">
                    {/* Left Red Bars */}
                    <div className="absolute left-0 top-0 w-2 h-6 bg-red-600"></div>
                    <div className="absolute left-0 bottom-0 w-2 h-6 bg-red-600"></div>

                    <h3 className="text-lg font-semibold uppercase">Education:</h3>
                    <p className="text-gray-800 text-sm mt-1">Masters of Architecture</p>
                    <p className="text-gray-800 text-sm">Yale University</p>
                    <p className="text-gray-800 text-sm mt-2">Masters of Architecture</p>
                    <p className="text-gray-800 text-sm">Yale University</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
