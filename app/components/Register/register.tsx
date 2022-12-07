export default function Register() {
    return (
        <div className="bg-register bg-no-repeat bg-cover h-screen">
            <div className="flex items-center h-20 mb-3">
                <h1 className="m-5 text-3xl text-white">NyaWorld</h1>
            </div>            

            <div className="flex flex-col items-center justify-center w-screen h-5/6 m-5">
                <div className="bg-white rounded-3xl p-5">
                   <h1 className="text-4xl text-center">Criar uma nova conta</h1>
                       <form>
                            <div className="flex flex-col gap-x-10 gap-y-10 m-3 my-10">
                                <div className="flex gap-x-2 items-center">
                                    <label htmlFor="inome">Nome:</label>
                                    <input className="border-solid border-2 border-black-100 rounded h-10 px-2" type="text" name="nome" id="inome" placeholder="seu nome" autoComplete="given-name" required/>
                                </div>
                            </div>
                            <div className="flex gap-x-2 m-3 my-10 items-center">
                                <label htmlFor="iemail">E-mail:</label>
                                <input className="border-solid border-2 border-black-100 rounded h-10 px-2" type="email" name="email" id="iemail" autoComplete="off" placeholder="examplo@endereço.com" required />
                            </div>
                            <div className="flex gap-x-2 m-3 my-10 items-center">
                                <label htmlFor="isenha">Senha:</label>
                                <input className="border-solid border-2 border-black-100 rounded h-10 px-2" type="password" name="senha" id="isenha" placeholder="sua senha" minLength={8} required />
                            </div>
                            <div className="flex justify-center">
                                <input className="text-white bg-black p-3 rounded cursor-pointer hover:bg-gray-300 hover:text-black" type="submit" value="Cadastre-se" />
                            </div>
                        </form>
                        <a className="flex text-blue-700 p-1 my-3 justify-center hover:text-gray-900" href="../Login">Já tem uma conta?</a>
                </div>
            </div>
        </div>
    )
}