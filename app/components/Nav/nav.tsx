export default function Nav() {
    return (
        <div className="flex p-3 justify-between">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
            <div className="flex items-center gap-x-5">
                <span className="material-icons scale-125 cursor-pointer">menu</span>
                <h1 className="font-sans text-3xl font-semibold">Nya Word</h1>
            </div>

            <div className="mr-10">
                <input className="w-96 h-12 p-1 px-5 rounded-3xl" type="text" name="buscar" id="ibuscar" placeholder="Buscar..."/>
                <span className="material-icons relative right-8 top-2 cursor-pointer">search</span>
            </div>

            <div>
                <nav className="flex gap-x-5 items-center absolute right-5 top-0">
                    <ul className="flex gap-x-5">
                        <li className="text-white bg-stone-400 p-2 rounded-md hover:bg-stone-300 cursor-pointer"><a href="../Login">Button</a></li>
                        <li className="text-white bg-stone-400 p-2 rounded-md hover:bg-stone-300 cursor-pointer"><a href="#">Sing up</a></li>
                    </ul>
                    <div className="border-4 border-solid border-stone-400 rounded-full my-1 cursor-pointer">
                        <img className="rounded-full w-16" src="https://i.imgur.com/wb2NDAV.jpg" alt="#" />
                    </div>
                </nav>
            </div>

        </div>
    )
}