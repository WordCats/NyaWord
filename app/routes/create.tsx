import Nav from "~/components/Nav/nav"

export default function createpage() {
    return (
        <div className="w-screen h-screen">
            
            <div>
                <Nav />
            </div>
            <div className="mt-12 mr-24 grid grid-cols-2 gap-2 items-center justify-center">
                <div>
                    <div className="grid justify-items-end pr-12">
                        <input id="coverfile" className="hidden" type="file"/>
                        <button>
                            <img className="border-2"
                                src="https://via.placeholder.com/200x300"
                                alt="Envie uma capa"></img>
                        </button>
                        


                    </div>
                </div>
                <div className="w-auto h-auto shadow-md border ">
                    <div className="m-6">
                        <div>
                            <span className="text-2xl">Título:</span> <br />
                            <input className="w-full h-12 p-2 border" type="test" placeholder="Historia sem titulo"></input>
                        </div>
                        <hr />
                        <div>
                            <span className="text-2xl">Descrição:</span> <br />
                            <textarea className="w-full h-28 resize-none p-2 border" placeholder="Era uma vez..." name="" id=""></textarea>
                        </div>
                        <hr />
                        <div>
                            <span className="text-2xl" >Gêneros:</span> <br />
                            <input className="w-full h-12 p-2 border" type="text" placeholder="Ação, Drama, Romance" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center m-12">
                <button className="w-48 h-auto rounded-md  border-l-cyan-400 bg-violet-500 hover:bg-violet-400 text-white text-2xl">
                    Criar Universo!
                </button>
            </div>
        </div>

    )
}