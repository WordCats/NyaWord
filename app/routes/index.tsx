import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import Card from "~/components/Card/card";
import Nav from "~/components/Nav/nav";



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

      <div className="bg-bluesky bg-center py-12">
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
            <h1 className="text-xl my-4 bg-zinc-900 text-white pl-2" >Novidades</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
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
              <h1 className="text-xl my-4 bg-zinc-900 text-white pl-2" >Capítulos lançados recentemente</h1>
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
            <h1 className="text-xl my-4 bg-zinc-900 text-white pl-2" >As melhores histórias para você!</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
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
    </div>
  );
}
