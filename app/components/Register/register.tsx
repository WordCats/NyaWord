export default function Register() {
    return (
        <div>
            <div>
                <h1 className="bg-red-700 h-24">CABEÇALHO</h1>
            </div>            

            <div className="flex flex-col items-center bg-blue-700 p-3 w-2/5">
                <h1>Criar uma nova conta</h1>
                <form>
                    <div className="flex gap-x-10 m-3">
                        <div className="flex gap-x-2">
                            <label htmlFor="inome">Nome:</label>
                            <input type="text" name="nome" id="inome" autoComplete="given-name" required/>
                        </div>

                        <div className="flex gap-x-2">
                            <label htmlFor="isobrenome">Sobrenome:</label>
                            <input type="text" name="sobrenome" id="isobrenome" autoComplete="family-name" required />
                        </div>
                    </div>

                    <div className="flex gap-x-2 m-3">
                        <label htmlFor="iemail">E-mail:</label>
                        <input type="email" name="email" id="iemail" autoComplete="off" required />
                    </div>

                    <div className="flex gap-x-2 m-3">
                        <label htmlFor="isenha">Senha:</label>
                        <input type="password" name="senha" id="isenha" minLength={8} required />
                    </div>
                    
                    <div className="flex justify-center">
                        <input className="bg-red-700 p-1 my-3" type="submit" value="Cadastre-se" />
                    </div>
                </form>
                <a className="text-blue-300 p-1 my-3" href="../Login">Já tem uma conta?</a>
            </div>
        </div>
    )
}