import { useState } from "react";

export default function LoginPage() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-bluesky bg-cover bg-center">
      <div className="flex items-center justify-center mt-24">
        <div className="w-5/6 h-5/6 md:w-2/6 md:h-80 shadow-2xl bg-white rounded-lg">
          <div className="m-4">
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Seu e-mail</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@nyaword.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900">Sua senha</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Lembre-se de mim</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}