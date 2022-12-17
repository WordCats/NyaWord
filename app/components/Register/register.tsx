export default function Register() {
    return (
        <div className="bg-greensky bg-no-repeat bg-cover h-screen">
            <div className="w-full h-full bg-gray-900/30 backdrop-blur-sm">
                <div className="flex items-center h-20 mb-3">
                    <h1 className="m-5 text-3xl text-white">NyaWorld</h1>
                </div>

                <div className="flex items-center justify-center w-screen h-5/6 sm:m-5">
                    <div className="bg-white rounded-3xl p-5 w-5/6 sm:w-4/6 md:w-2/6">
                        <h1 className="text-4xl text-center">Criar conta</h1>
                        <div>
                            <form className="mt-6">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="name" autoComplete="off" placeholder="OAcumulador" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="email" name="email" id="iemail" autoComplete="off" placeholder="examplo@endereço.com" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="password" autoComplete="off" placeholder="Sua senha" required />
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Cadastre-se</button>
                                </div>
                            </form>
                        </div>
                        <a className="flex text-blue-700 p-1 my-3 justify-center hover:text-gray-900" href="../Login">Já tem uma conta?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}