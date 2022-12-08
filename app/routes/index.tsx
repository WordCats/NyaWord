import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import Card from "~/components/Card/card";
import Nav from "~/components/Nav/nav";
import Footer from "~/components/Footer/footer";



export async function loader() {
  return await fetch('https://catfact.ninja/fact');
}


export default function Index() {
  let [isOpen, setIsOpen] = useState(false);

  const fact = useLoaderData();

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="bg-greensky bg-center py-12">
        <div className="mx-4 sm:mx-12">
          <div>
            <h1 className="text-center text-4xl">Seja bem vindo ao Nya Word!</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="my-12 md:m-12 w-full md:w-2/5">
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="A lenda do Heroi, O bruxo viajente..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pesquisar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Crie já a sua!
            </button>

          </div>
        </div>
      </div>
      <div className="bg-base bg-repeat">
        <div className="mx-4 sm:mx-12">
          <div>
            <div className="flex my-4 border-b-2 border-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
              </svg>
              <h1 className="text-2xl text-black pl-2 " >Novidades</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 select-none">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <div>
              <div className="flex my-4 border-b-2 border-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <h1 className="text-2xl text-black pl-2 " >Capítulos lançados recentemente</h1>
              </div>
            </div>

            <div className="overflow-x-auto relative shadow-xl">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      História
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Capítulo
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      <a href="#">A lenda do Heroi</a>
                    </th>
                    <td className="py-4 px-6">
                      Capítulo 92
                    </td>
                    <td className="py-4 px-6">
                      Hoje
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      <a href="#">O bruxo viajante</a>
                    </th>
                    <td className="py-4 px-6">
                      Capítulo 140
                    </td>
                    <td className="py-4 px-6">
                      Ontem
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                      <a href="#">Rencarnei como um esqueleto na idade das trevas</a>
                    </th>
                    <td className="py-4 px-6">
                      Capítulo 22
                    </td>
                    <td className="py-4 px-6">
                      A uma semana
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div>
            <div>
              <div className="flex my-4 border-b-2 border-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <h1 className="text-2xl text-black pl-2 " >As melhores histórias para você!</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 select-none">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    <div className="mt-8">
      <Footer />
    </div>
    </div>
  );
}
