import React from "react";
import profileImage from "../statics/png/about-us.png"; // Replace with actual image path

const ProfileCard = () => {
    return (
        <div className="flex-col bg-foko min-h-screen p-10 justify-start">
            <div className="flex">
                {/* Left Section (Image + Red Bars) */}
                <div className="relative w-1/3 flex flex-col items-center">
                    {/* Top Red Bar */}

                    {/* Profile Image */}
                    <img
                        src={profileImage}
                        alt="Jenny Fontenot"
                        className="w-full max-w-md object-cover shadow-lg"
                    />

                    {/* Bottom Red Bar */}
                </div>

                {/* Right Section (Text Content) */}
                <div className="w-2/3 px-10 flex-col justify-items-start">
                    {/* Name and Title */}
                    <h1 className="text-2xl font-bold">JENNY FONTENOT, RA</h1>
                    <h2 className="text-lg font-light uppercase mt-2">Co-Founder</h2>

                    {/* Description */}
                    <p className="mt-4 text-start text-sm leading-6">
                        Jenny is the co-founder and Architectural Director of FOKO Studio. She is a licensed architect
                        with a passion
                        for creating positive impact for individuals and communities through shaping the built
                        environment. With over
                        10 years of experience in various typologies and scales, including retail, institutional,
                        residential,
                        workplace, and adaptive-reuse projects, Jenny has developed a diverse portfolio that showcases
                        her versatility
                        and expertise.
                    </p>

                    <p className="mt-4 text-start text-gray-800 text-sm leading-6">
                        As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and
                        understanding
                        of different building regulations, allowing her to navigate complex projects while seeking
                        innovative design
                        solutions. Jenny sees the value in every detail and approaches each design challenge with an
                        enthusiastic
                        mindset, eager to unravel its puzzle-like nature.
                    </p>

                    <p className="mt-4 text-start text-gray-800 text-sm leading-6">
                        Extending beyond traditional architecture, Jenny’s interests include furniture and product
                        design. She
                        believes in creating holistic and captivating experiences for users through design and
                        collaboration at all
                        scales.
                    </p>
                </div>
            </div>
            {/* Education Section */}
            <div className="mt-8 relative">
                {/* Left Red Bars */}

                <h3 className="text-start text-lg font-semibold uppercase">Education:</h3>
                <p className="text-start text-gray-800 text-sm mt-1">Masters of Architecture</p>
                <p className="text-start text-gray-800 text-sm">Yale University</p>
                <p className="text-start text-gray-800 text-sm mt-2">Masters of Architecture</p>
                <p className="text-start text-gray-800 text-sm">Yale University</p>
            </div>
        </div>
    );
};

export default ProfileCard;
