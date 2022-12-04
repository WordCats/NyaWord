export default function Cover() {
    return (
        <div>
            <a href="/">
                <div className="relative w-52 h-80 overflow-hidden rounded-md translate-y-0 duration-300 hover:-translate-y-6">
                    <div className="absolute delay-100 top-3/4 hover:top-0 hover:backdrop-blur-sm  left-0 w-full h-full bg-gradient-to-b from-zinc-900/70 to-zinc-700">
                        <h1 className="m-2 text-xl break-words text-white w-full h-full" >
                            A lenda do heroi...
                            <p className="mt-2 text-base text-white/75 w-full h-full" >
                                é um conto de uma grando heroi que ficou conhecido como o salvador do mundo...
                            </p>
                        </h1>
                    </div>
                    <img
                        className="w-full h-full"
                        src="https://pbs.twimg.com/media/Etv-CItXIAQP6AC.jpg" />
                </div>
            </a>
        </div>
    )
}