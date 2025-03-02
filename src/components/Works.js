import React, {useState} from "react";

const Works = () => {
    const [active, setActive] = useState("all");

    return (
        <div className="flex w-full h-screen items-center justify-center text-black">
            <div
                className="flex flex-col w-[10%] h-3/4 border-r border-gray-500 justify-center items-start ml-foko bg-gradient-to-b from-black via-gray-900 to-gray-100 bg-clip-text text-transparent">
                {/* RESIDENTIAL Button */}
                <button
                    className={`py-2 rounded-md transition-all ${
                        active === "RESIDENTIAL" ? "text-black" : "text-gray-400"
                    }`}
                    onClick={() => setActive("RESIDENTIAL")}
                >
                    RESIDENTIAL
                </button>

                {/* COMMERCIAL Button */}
                <button
                    className={`py-2 rounded-md transition-all ${
                        active === "COMMERCIAL" ? "text-black" : "text-gray-400"
                    }`}
                    onClick={() => setActive("COMMERCIAL")}
                >
                    COMMERCIAL
                </button>

                {/* All Button */}
                <button
                    className={`py-2 rounded-md transition-all ${
                        active === "ALL" ? "text-black" : "text-gray-400"
                    }`}
                    onClick={() => setActive("ALL")}
                >
                    ALL
                </button>
            </div>
            <div className="flex flex-col w-[75%] h-3/4">
                <div
                    className="grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1 px-12 w-full max-w-8xl overflow-auto">
                    <div className="h-[208px] bg-gray-900 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-900 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-900 flex items-center justify-center text-white"></div>
                    <div className="h-[208px] bg-gray-900 flex items-center justify-center text-white"></div>
                </div>
            </div>
            <div className="flex flex-col w-[15%] h-3/4">

            </div>
        </div>
    )
}

export default Works;