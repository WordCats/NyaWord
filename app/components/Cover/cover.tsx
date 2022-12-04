export default function Cover() {
    return (
        <div className="h-72 w-52">
            <div className="bg-white rounded-2xl shadow-2xl w-52 overflow-hidden relative">
                <a href="#">
                    <div className="">
                        <img 
                        src="https://m.media-amazon.com/images/I/81pk4GIbLUL.jpg" 
                        alt="" 
                        className="transition duration-700 hover:scale-125 hover:blur-sm" />
                        <div className="transition duration-400 translate-y-6 hover:translate-y-0 absolute top-3/4 w-full h-full bg-neutral-900/90 ">
                            <h1 className="absolute mx-2 mb-2 top-1 text-lg text-white font-semibold">Rencarnei como uma galinha overpower...</h1>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}