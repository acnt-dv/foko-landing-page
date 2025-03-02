
const Works = () => {
    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="flex flex-col w-1/4 h-3/4 border-r border-gray-500 justify-center">
                <p>RESIDENTIAL</p>
                <p>COMMERCIAL</p>
                <p>ALL</p>
            </div>
            <div className="flex flex-col w-2/4 h-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    <div className="w-32 h-32 bg-blue-500 flex items-center justify-center text-white">1</div>
                    <div className="w-32 h-32 bg-green-500 flex items-center justify-center text-white">2</div>
                    <div className="w-32 h-32 bg-red-500 flex items-center justify-center text-white">3</div>
                    <div className="w-32 h-32 bg-yellow-500 flex items-center justify-center text-white">4</div>
                    <div className="w-32 h-32 bg-purple-500 flex items-center justify-center text-white">5</div>
                    <div className="w-32 h-32 bg-pink-500 flex items-center justify-center text-white">6</div>
                    <div className="w-32 h-32 bg-indigo-500 flex items-center justify-center text-white">7</div>
                    <div className="w-32 h-32 bg-gray-500 flex items-center justify-center text-white">8</div>
                    <div className="w-32 h-32 bg-teal-500 flex items-center justify-center text-white">9</div>
                </div>
            </div>
        </div>
    )
}

export default Works;