export default function Login() {
  return (
    <div className="w-scree h-screen flex items-center justify-center">
      <div className="bg-sky h-screen flex justify-center items-center w-screen">
        <div className="pl-3">
          <h1 className="text-6xl text-gray-100 font-semibold ">Nya Word! 🐱‍🚀</h1><br></br>
          <h2 className="text-4xl text-gray-300">O Lugar onde você compartilha seu <a className="text-5xl underline decoration-pink-500 cursor-pointer">mundo de historia!</a><br />Leia as incriveis historias que todos tem a contar.</h2>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center pl-56 pr-56">
        <div className="w-96 h-96 shadow-2xl rounded-lg">
          <div className="m-12 space-y-4">
            <h1 className="text-3xl text-center">Entre agora!</h1>
            <input placeholder="E-mail" className="border-2 rounded-md w-72 h-10 pl-3" />
            <input placeholder="Senha" className="border-2 rounded-md w-72 h-10 pl-3" />
            <a className="cursor-pointer pt-2 text-cyan-600">Esqueceu a senha?</a>
            <div className="text-center space-y-4">
              <button className="cursor-pointer rounded w-40 h-8 bg-rose-500 hover:bg-rose-400 text-gray-100 ">Entrar</button>
              <hr />
              <button className="cursor-pointer rounded w-40 h-8 bg-cyan-700 hover:bg-cyan-500 text-gray-100 ">Criar conta!</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}