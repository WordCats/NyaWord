import Nav from "~/components/Nav/nav"
import Footer from "~/components/Footer/footer"
import Chapterlist from "~/components/List/chapterlist"
import Vollist from "~/components/List/vollist"
import Commentbox from "~/components/Comment/commentbox"

export default function HistoryPage() {
    const idioma = "Portugues"
    const likes = "14"
    const capitulos = "28"
    const viws = "100k"
    const autor = "Morti"
    const status = "Ativo"

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <div className="bg-greensky text-white">
                    <div className="bg-zinc-900/70 backdrop-blur-sm">
                        <div className="relative sm:flex p-1 pb-6 sm:p-8">
                            <div className="flex justify-center items-center my-4 sm:mr-3">
                                <div>
                                    <img className="overflow-hidden w-auto h-64"
                                        src="https://edit.org/photos/images/cat/portadas-libros-big-2019101610.jpg-1300.jpg" />
                                </div>
                            </div>
                            <div className="w-full sm:w-4/6">
                                <div>
                                    <div className="text-center text-3xl">
                                        <h1>Titulo da obra</h1>
                                    </div>
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {idioma}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                {capitulos}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                {likes}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                {viws}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                {autor}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="flex">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mx-4 text-left text-base">
                                            <p>
                                                Lorem ipsum dolor sit amet. Ut accusantium omnis et voluptatem velit quo quidem fuga qui assumenda voluptatibus vel corrupti delectus a facilis illum ut rerum eaque? Et quia internos eos quibusdam internos et quos blanditiis et dignissimos mollitia aut tenetur consequatur et nobis galisum et enim assumenda. Non laudantium aliquam et eveniet ullam aut nulla dolorem qui ipsam voluptates. Sit laudantium velit et laboriosam doloremque et maxime quas id mollitia sint.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"><a href="#">Ação</a></span>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"><a href="#">Ação</a></span>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"><a href="#">Ação</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <hr />
                    </div>
                    <div className="m-8 w-full">
                        <div>
                            <Vollist />
                        </div>
                        <div className="mt-8">
                            <Commentbox />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}