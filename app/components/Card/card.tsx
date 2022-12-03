export default function Card() {
    return (
        <div>
            <div className=" w-full lg:max-w-full lg:flex">
                <a className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" href="#">
                    <img src="https://via.placeholder.com/200x300" />
                </a>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            Verificado
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Lenda do Heroi</div>
                        <p className="text-gray-700 text-base">
                            Uma coisa é certa: ninguém sai vivo dessa vida.. Por causa da pressa, é que a mosca nasceu sem osso.. Uma coisa é uma coisa, outra coisa é outra coisa.. Onde quer que você esteja você sempre estará lá.. Eu sem mim não existo..
                            Por que 'tudo junto' se escreve separado e 'separado' se escreve tudo junto?. Eu sem mim não existo.. Mais vale um pássaro na mão do que bois voando.. Uma coisa é certa: ninguém sai vivo dessa vida.. A vida é uma vai e vem que não tem volta..
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://i.imgur.com/YY1iECT.jpg" alt="Avatar of Writer" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">Morti</p>
                            <p className="text-gray-600">dec 02</p>
                        </div>
                        <div className="ml-4">
                            <button>
                                <svg className="w-6 h-6 fill-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                            </button>
                            <button>
                                <svg className="w-6 h-6 fill-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}