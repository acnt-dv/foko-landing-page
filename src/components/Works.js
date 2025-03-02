
const Works = () => {
    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="flex flex-col w-1/4 h-3/4 border-r border-gray-500 justify-center">
                <p>RESIDENTIAL</p>
                <p>COMMERCIAL</p>
                <p>ALL</p>
            </div>
            <div className="flex flex-col w-2/4 h-3/4">
                <div className="grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 p-4 w-full max-w-4xl overflow-auto">
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">1</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">2</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">3</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">4</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">5</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">6</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">7</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">8</div>
                    <div className="h-[208px] bg-gray-500 flex items-center justify-center text-white">9</div>
                </div>
            </div>
        </div>
    )
}

export default Works;