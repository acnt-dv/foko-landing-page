import React, {useState} from "react";

const Works = () => {
    const [active, setActive] = useState("RESIDENTIAL");

    return (
        <div className="flex w-full h-screen items-center justify-center gap-8 text-black">
            <div
                className="flex flex-col w-[20%] h-3/4 xl:border-r xl:border-gray-500 justify-end xl:justify-center
                xl:ml-foko bg-gradient-to-b from-black via-gray-900 to-gray-100 bg-clip-text text-transparent
                font-rubik text-16 ml-[30px]">
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
            <div className="flex flex-col w-[55%] h-3/4">
                <div
                    className="grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1 px-12 w-full max-w-8xl overflow-auto scrollbar-hide">
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-900 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-500 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-900 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-500 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-500 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-500 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-500 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-900 flex items-center justify-center text-white"/>
                    <div className="h-[115px] xl:max-h-[208px] bg-gray-900 flex items-center justify-center text-white"/>
                </div>
            </div>
            <div className="flex flex-col w-[15%] h-3/4">

            </div>
        </div>
    )
}

export default Works;